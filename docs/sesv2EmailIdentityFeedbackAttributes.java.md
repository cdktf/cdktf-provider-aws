# `sesv2EmailIdentityFeedbackAttributes` Submodule <a name="`sesv2EmailIdentityFeedbackAttributes` Submodule" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Sesv2EmailIdentityFeedbackAttributes <a name="Sesv2EmailIdentityFeedbackAttributes" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_email_identity_feedback_attributes aws_sesv2_email_identity_feedback_attributes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sesv2_email_identity_feedback_attributes.Sesv2EmailIdentityFeedbackAttributes;

Sesv2EmailIdentityFeedbackAttributes.Builder.create(Construct scope, java.lang.String id)
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
    .emailIdentity(java.lang.String)
//  .emailForwardingEnabled(java.lang.Boolean)
//  .emailForwardingEnabled(IResolvable)
//  .id(java.lang.String)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer.parameter.emailIdentity">emailIdentity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_email_identity_feedback_attributes#email_identity Sesv2EmailIdentityFeedbackAttributes#email_identity}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer.parameter.emailForwardingEnabled">emailForwardingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_email_identity_feedback_attributes#email_forwarding_enabled Sesv2EmailIdentityFeedbackAttributes#email_forwarding_enabled}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_email_identity_feedback_attributes#id Sesv2EmailIdentityFeedbackAttributes#id}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `emailIdentity`<sup>Required</sup> <a name="emailIdentity" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer.parameter.emailIdentity"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_email_identity_feedback_attributes#email_identity Sesv2EmailIdentityFeedbackAttributes#email_identity}.

---

##### `emailForwardingEnabled`<sup>Optional</sup> <a name="emailForwardingEnabled" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer.parameter.emailForwardingEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_email_identity_feedback_attributes#email_forwarding_enabled Sesv2EmailIdentityFeedbackAttributes#email_forwarding_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_email_identity_feedback_attributes#id Sesv2EmailIdentityFeedbackAttributes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_email_identity_feedback_attributes#region Sesv2EmailIdentityFeedbackAttributes#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.resetEmailForwardingEnabled">resetEmailForwardingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetEmailForwardingEnabled` <a name="resetEmailForwardingEnabled" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.resetEmailForwardingEnabled"></a>

```java
public void resetEmailForwardingEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.resetId"></a>

```java
public void resetId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Sesv2EmailIdentityFeedbackAttributes resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.sesv2_email_identity_feedback_attributes.Sesv2EmailIdentityFeedbackAttributes;

Sesv2EmailIdentityFeedbackAttributes.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.sesv2_email_identity_feedback_attributes.Sesv2EmailIdentityFeedbackAttributes;

Sesv2EmailIdentityFeedbackAttributes.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.sesv2_email_identity_feedback_attributes.Sesv2EmailIdentityFeedbackAttributes;

Sesv2EmailIdentityFeedbackAttributes.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.sesv2_email_identity_feedback_attributes.Sesv2EmailIdentityFeedbackAttributes;

Sesv2EmailIdentityFeedbackAttributes.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Sesv2EmailIdentityFeedbackAttributes.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Sesv2EmailIdentityFeedbackAttributes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Sesv2EmailIdentityFeedbackAttributes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Sesv2EmailIdentityFeedbackAttributes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_email_identity_feedback_attributes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Sesv2EmailIdentityFeedbackAttributes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.emailForwardingEnabledInput">emailForwardingEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.emailIdentityInput">emailIdentityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.emailForwardingEnabled">emailForwardingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.emailIdentity">emailIdentity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `emailForwardingEnabledInput`<sup>Optional</sup> <a name="emailForwardingEnabledInput" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.emailForwardingEnabledInput"></a>

```java
public java.lang.Object getEmailForwardingEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `emailIdentityInput`<sup>Optional</sup> <a name="emailIdentityInput" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.emailIdentityInput"></a>

```java
public java.lang.String getEmailIdentityInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `emailForwardingEnabled`<sup>Required</sup> <a name="emailForwardingEnabled" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.emailForwardingEnabled"></a>

```java
public java.lang.Object getEmailForwardingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `emailIdentity`<sup>Required</sup> <a name="emailIdentity" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.emailIdentity"></a>

```java
public java.lang.String getEmailIdentity();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Sesv2EmailIdentityFeedbackAttributesConfig <a name="Sesv2EmailIdentityFeedbackAttributesConfig" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sesv2_email_identity_feedback_attributes.Sesv2EmailIdentityFeedbackAttributesConfig;

Sesv2EmailIdentityFeedbackAttributesConfig.builder()
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
    .emailIdentity(java.lang.String)
//  .emailForwardingEnabled(java.lang.Boolean)
//  .emailForwardingEnabled(IResolvable)
//  .id(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.emailIdentity">emailIdentity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_email_identity_feedback_attributes#email_identity Sesv2EmailIdentityFeedbackAttributes#email_identity}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.emailForwardingEnabled">emailForwardingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_email_identity_feedback_attributes#email_forwarding_enabled Sesv2EmailIdentityFeedbackAttributes#email_forwarding_enabled}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_email_identity_feedback_attributes#id Sesv2EmailIdentityFeedbackAttributes#id}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `emailIdentity`<sup>Required</sup> <a name="emailIdentity" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.emailIdentity"></a>

```java
public java.lang.String getEmailIdentity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_email_identity_feedback_attributes#email_identity Sesv2EmailIdentityFeedbackAttributes#email_identity}.

---

##### `emailForwardingEnabled`<sup>Optional</sup> <a name="emailForwardingEnabled" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.emailForwardingEnabled"></a>

```java
public java.lang.Object getEmailForwardingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_email_identity_feedback_attributes#email_forwarding_enabled Sesv2EmailIdentityFeedbackAttributes#email_forwarding_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_email_identity_feedback_attributes#id Sesv2EmailIdentityFeedbackAttributes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_email_identity_feedback_attributes#region Sesv2EmailIdentityFeedbackAttributes#region}

---



