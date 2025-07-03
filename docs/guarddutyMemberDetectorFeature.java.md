# `guarddutyMemberDetectorFeature` Submodule <a name="`guarddutyMemberDetectorFeature` Submodule" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GuarddutyMemberDetectorFeature <a name="GuarddutyMemberDetectorFeature" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/guardduty_member_detector_feature aws_guardduty_member_detector_feature}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.guardduty_member_detector_feature.GuarddutyMemberDetectorFeature;

GuarddutyMemberDetectorFeature.Builder.create(Construct scope, java.lang.String id)
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
    .accountId(java.lang.String)
    .detectorId(java.lang.String)
    .name(java.lang.String)
    .status(java.lang.String)
//  .additionalConfiguration(IResolvable)
//  .additionalConfiguration(java.util.List<GuarddutyMemberDetectorFeatureAdditionalConfiguration>)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/guardduty_member_detector_feature#account_id GuarddutyMemberDetectorFeature#account_id}. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.Initializer.parameter.detectorId">detectorId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/guardduty_member_detector_feature#detector_id GuarddutyMemberDetectorFeature#detector_id}. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/guardduty_member_detector_feature#name GuarddutyMemberDetectorFeature#name}. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/guardduty_member_detector_feature#status GuarddutyMemberDetectorFeature#status}. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.Initializer.parameter.additionalConfiguration">additionalConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfiguration">GuarddutyMemberDetectorFeatureAdditionalConfiguration</a>></code> | additional_configuration block. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/guardduty_member_detector_feature#account_id GuarddutyMemberDetectorFeature#account_id}.

---

##### `detectorId`<sup>Required</sup> <a name="detectorId" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.Initializer.parameter.detectorId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/guardduty_member_detector_feature#detector_id GuarddutyMemberDetectorFeature#detector_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/guardduty_member_detector_feature#name GuarddutyMemberDetectorFeature#name}.

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/guardduty_member_detector_feature#status GuarddutyMemberDetectorFeature#status}.

---

##### `additionalConfiguration`<sup>Optional</sup> <a name="additionalConfiguration" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.Initializer.parameter.additionalConfiguration"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfiguration">GuarddutyMemberDetectorFeatureAdditionalConfiguration</a>>

additional_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/guardduty_member_detector_feature#additional_configuration GuarddutyMemberDetectorFeature#additional_configuration}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/guardduty_member_detector_feature#region GuarddutyMemberDetectorFeature#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.putAdditionalConfiguration">putAdditionalConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.resetAdditionalConfiguration">resetAdditionalConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdditionalConfiguration` <a name="putAdditionalConfiguration" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.putAdditionalConfiguration"></a>

```java
public void putAdditionalConfiguration(IResolvable OR java.util.List<GuarddutyMemberDetectorFeatureAdditionalConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.putAdditionalConfiguration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfiguration">GuarddutyMemberDetectorFeatureAdditionalConfiguration</a>>

---

##### `resetAdditionalConfiguration` <a name="resetAdditionalConfiguration" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.resetAdditionalConfiguration"></a>

```java
public void resetAdditionalConfiguration()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GuarddutyMemberDetectorFeature resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.guardduty_member_detector_feature.GuarddutyMemberDetectorFeature;

GuarddutyMemberDetectorFeature.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.guardduty_member_detector_feature.GuarddutyMemberDetectorFeature;

GuarddutyMemberDetectorFeature.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.guardduty_member_detector_feature.GuarddutyMemberDetectorFeature;

GuarddutyMemberDetectorFeature.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.guardduty_member_detector_feature.GuarddutyMemberDetectorFeature;

GuarddutyMemberDetectorFeature.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GuarddutyMemberDetectorFeature.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GuarddutyMemberDetectorFeature resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GuarddutyMemberDetectorFeature to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GuarddutyMemberDetectorFeature that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/guardduty_member_detector_feature#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GuarddutyMemberDetectorFeature to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.additionalConfiguration">additionalConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList">GuarddutyMemberDetectorFeatureAdditionalConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.additionalConfigurationInput">additionalConfigurationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfiguration">GuarddutyMemberDetectorFeatureAdditionalConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.detectorIdInput">detectorIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.detectorId">detectorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `additionalConfiguration`<sup>Required</sup> <a name="additionalConfiguration" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.additionalConfiguration"></a>

```java
public GuarddutyMemberDetectorFeatureAdditionalConfigurationList getAdditionalConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList">GuarddutyMemberDetectorFeatureAdditionalConfigurationList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `additionalConfigurationInput`<sup>Optional</sup> <a name="additionalConfigurationInput" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.additionalConfigurationInput"></a>

```java
public java.lang.Object getAdditionalConfigurationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfiguration">GuarddutyMemberDetectorFeatureAdditionalConfiguration</a>>

---

##### `detectorIdInput`<sup>Optional</sup> <a name="detectorIdInput" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.detectorIdInput"></a>

```java
public java.lang.String getDetectorIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `detectorId`<sup>Required</sup> <a name="detectorId" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.detectorId"></a>

```java
public java.lang.String getDetectorId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GuarddutyMemberDetectorFeatureAdditionalConfiguration <a name="GuarddutyMemberDetectorFeatureAdditionalConfiguration" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.guardduty_member_detector_feature.GuarddutyMemberDetectorFeatureAdditionalConfiguration;

GuarddutyMemberDetectorFeatureAdditionalConfiguration.builder()
    .name(java.lang.String)
    .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfiguration.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/guardduty_member_detector_feature#name GuarddutyMemberDetectorFeature#name}. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfiguration.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/guardduty_member_detector_feature#status GuarddutyMemberDetectorFeature#status}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfiguration.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/guardduty_member_detector_feature#name GuarddutyMemberDetectorFeature#name}.

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfiguration.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/guardduty_member_detector_feature#status GuarddutyMemberDetectorFeature#status}.

---

### GuarddutyMemberDetectorFeatureConfig <a name="GuarddutyMemberDetectorFeatureConfig" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.guardduty_member_detector_feature.GuarddutyMemberDetectorFeatureConfig;

GuarddutyMemberDetectorFeatureConfig.builder()
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
    .accountId(java.lang.String)
    .detectorId(java.lang.String)
    .name(java.lang.String)
    .status(java.lang.String)
//  .additionalConfiguration(IResolvable)
//  .additionalConfiguration(java.util.List<GuarddutyMemberDetectorFeatureAdditionalConfiguration>)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/guardduty_member_detector_feature#account_id GuarddutyMemberDetectorFeature#account_id}. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.detectorId">detectorId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/guardduty_member_detector_feature#detector_id GuarddutyMemberDetectorFeature#detector_id}. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/guardduty_member_detector_feature#name GuarddutyMemberDetectorFeature#name}. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/guardduty_member_detector_feature#status GuarddutyMemberDetectorFeature#status}. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.additionalConfiguration">additionalConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfiguration">GuarddutyMemberDetectorFeatureAdditionalConfiguration</a>></code> | additional_configuration block. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/guardduty_member_detector_feature#account_id GuarddutyMemberDetectorFeature#account_id}.

---

##### `detectorId`<sup>Required</sup> <a name="detectorId" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.detectorId"></a>

```java
public java.lang.String getDetectorId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/guardduty_member_detector_feature#detector_id GuarddutyMemberDetectorFeature#detector_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/guardduty_member_detector_feature#name GuarddutyMemberDetectorFeature#name}.

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/guardduty_member_detector_feature#status GuarddutyMemberDetectorFeature#status}.

---

##### `additionalConfiguration`<sup>Optional</sup> <a name="additionalConfiguration" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.additionalConfiguration"></a>

```java
public java.lang.Object getAdditionalConfiguration();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfiguration">GuarddutyMemberDetectorFeatureAdditionalConfiguration</a>>

additional_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/guardduty_member_detector_feature#additional_configuration GuarddutyMemberDetectorFeature#additional_configuration}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/guardduty_member_detector_feature#region GuarddutyMemberDetectorFeature#region}

---

## Classes <a name="Classes" id="Classes"></a>

### GuarddutyMemberDetectorFeatureAdditionalConfigurationList <a name="GuarddutyMemberDetectorFeatureAdditionalConfigurationList" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.guardduty_member_detector_feature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList;

new GuarddutyMemberDetectorFeatureAdditionalConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.get"></a>

```java
public GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfiguration">GuarddutyMemberDetectorFeatureAdditionalConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfiguration">GuarddutyMemberDetectorFeatureAdditionalConfiguration</a>>

---


### GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference <a name="GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.guardduty_member_detector_feature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference;

new GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfiguration">GuarddutyMemberDetectorFeatureAdditionalConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfiguration">GuarddutyMemberDetectorFeatureAdditionalConfiguration</a>

---



