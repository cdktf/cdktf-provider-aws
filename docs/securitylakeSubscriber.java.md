# `securitylakeSubscriber` Submodule <a name="`securitylakeSubscriber` Submodule" id="@cdktf/provider-aws.securitylakeSubscriber"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecuritylakeSubscriber <a name="SecuritylakeSubscriber" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/securitylake_subscriber aws_securitylake_subscriber}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.securitylake_subscriber.SecuritylakeSubscriber;

SecuritylakeSubscriber.Builder.create(Construct scope, java.lang.String id)
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
//  .accessType(java.lang.String)
//  .source(IResolvable)
//  .source(java.util.List<SecuritylakeSubscriberSource>)
//  .subscriberDescription(java.lang.String)
//  .subscriberIdentity(IResolvable)
//  .subscriberIdentity(java.util.List<SecuritylakeSubscriberSubscriberIdentity>)
//  .subscriberName(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(SecuritylakeSubscriberTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.accessType">accessType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/securitylake_subscriber#access_type SecuritylakeSubscriber#access_type}. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.source">source</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource">SecuritylakeSubscriberSource</a>></code> | source block. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.subscriberDescription">subscriberDescription</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/securitylake_subscriber#subscriber_description SecuritylakeSubscriber#subscriber_description}. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.subscriberIdentity">subscriberIdentity</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity">SecuritylakeSubscriberSubscriberIdentity</a>></code> | subscriber_identity block. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.subscriberName">subscriberName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/securitylake_subscriber#subscriber_name SecuritylakeSubscriber#subscriber_name}. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/securitylake_subscriber#tags SecuritylakeSubscriber#tags}. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts">SecuritylakeSubscriberTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessType`<sup>Optional</sup> <a name="accessType" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.accessType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/securitylake_subscriber#access_type SecuritylakeSubscriber#access_type}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.source"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource">SecuritylakeSubscriberSource</a>>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/securitylake_subscriber#source SecuritylakeSubscriber#source}

---

##### `subscriberDescription`<sup>Optional</sup> <a name="subscriberDescription" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.subscriberDescription"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/securitylake_subscriber#subscriber_description SecuritylakeSubscriber#subscriber_description}.

---

##### `subscriberIdentity`<sup>Optional</sup> <a name="subscriberIdentity" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.subscriberIdentity"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity">SecuritylakeSubscriberSubscriberIdentity</a>>

subscriber_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/securitylake_subscriber#subscriber_identity SecuritylakeSubscriber#subscriber_identity}

---

##### `subscriberName`<sup>Optional</sup> <a name="subscriberName" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.subscriberName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/securitylake_subscriber#subscriber_name SecuritylakeSubscriber#subscriber_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/securitylake_subscriber#tags SecuritylakeSubscriber#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts">SecuritylakeSubscriberTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/securitylake_subscriber#timeouts SecuritylakeSubscriber#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.putSubscriberIdentity">putSubscriberIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetAccessType">resetAccessType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetSubscriberDescription">resetSubscriberDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetSubscriberIdentity">resetSubscriberIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetSubscriberName">resetSubscriberName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSource` <a name="putSource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.putSource"></a>

```java
public void putSource(IResolvable OR java.util.List<SecuritylakeSubscriberSource> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.putSource.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource">SecuritylakeSubscriberSource</a>>

---

##### `putSubscriberIdentity` <a name="putSubscriberIdentity" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.putSubscriberIdentity"></a>

```java
public void putSubscriberIdentity(IResolvable OR java.util.List<SecuritylakeSubscriberSubscriberIdentity> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.putSubscriberIdentity.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity">SecuritylakeSubscriberSubscriberIdentity</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.putTimeouts"></a>

```java
public void putTimeouts(SecuritylakeSubscriberTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts">SecuritylakeSubscriberTimeouts</a>

---

##### `resetAccessType` <a name="resetAccessType" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetAccessType"></a>

```java
public void resetAccessType()
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetSource"></a>

```java
public void resetSource()
```

##### `resetSubscriberDescription` <a name="resetSubscriberDescription" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetSubscriberDescription"></a>

```java
public void resetSubscriberDescription()
```

##### `resetSubscriberIdentity` <a name="resetSubscriberIdentity" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetSubscriberIdentity"></a>

```java
public void resetSubscriberIdentity()
```

##### `resetSubscriberName` <a name="resetSubscriberName" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetSubscriberName"></a>

```java
public void resetSubscriberName()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SecuritylakeSubscriber resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.securitylake_subscriber.SecuritylakeSubscriber;

SecuritylakeSubscriber.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.securitylake_subscriber.SecuritylakeSubscriber;

SecuritylakeSubscriber.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.securitylake_subscriber.SecuritylakeSubscriber;

SecuritylakeSubscriber.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.securitylake_subscriber.SecuritylakeSubscriber;

SecuritylakeSubscriber.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SecuritylakeSubscriber.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SecuritylakeSubscriber resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SecuritylakeSubscriber to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SecuritylakeSubscriber that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/securitylake_subscriber#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SecuritylakeSubscriber to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.resourceShareArn">resourceShareArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.resourceShareName">resourceShareName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.s3BucketArn">s3BucketArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.source">source</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList">SecuritylakeSubscriberSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberEndpoint">subscriberEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberIdentity">subscriberIdentity</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList">SecuritylakeSubscriberSubscriberIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberStatus">subscriberStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.tagsAll">tagsAll</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference">SecuritylakeSubscriberTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.accessTypeInput">accessTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.sourceInput">sourceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource">SecuritylakeSubscriberSource</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberDescriptionInput">subscriberDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberIdentityInput">subscriberIdentityInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity">SecuritylakeSubscriberSubscriberIdentity</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberNameInput">subscriberNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts">SecuritylakeSubscriberTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.accessType">accessType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberDescription">subscriberDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberName">subscriberName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `resourceShareArn`<sup>Required</sup> <a name="resourceShareArn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.resourceShareArn"></a>

```java
public java.lang.String getResourceShareArn();
```

- *Type:* java.lang.String

---

##### `resourceShareName`<sup>Required</sup> <a name="resourceShareName" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.resourceShareName"></a>

```java
public java.lang.String getResourceShareName();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `s3BucketArn`<sup>Required</sup> <a name="s3BucketArn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.s3BucketArn"></a>

```java
public java.lang.String getS3BucketArn();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.source"></a>

```java
public SecuritylakeSubscriberSourceList getSource();
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList">SecuritylakeSubscriberSourceList</a>

---

##### `subscriberEndpoint`<sup>Required</sup> <a name="subscriberEndpoint" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberEndpoint"></a>

```java
public java.lang.String getSubscriberEndpoint();
```

- *Type:* java.lang.String

---

##### `subscriberIdentity`<sup>Required</sup> <a name="subscriberIdentity" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberIdentity"></a>

```java
public SecuritylakeSubscriberSubscriberIdentityList getSubscriberIdentity();
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList">SecuritylakeSubscriberSubscriberIdentityList</a>

---

##### `subscriberStatus`<sup>Required</sup> <a name="subscriberStatus" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberStatus"></a>

```java
public java.lang.String getSubscriberStatus();
```

- *Type:* java.lang.String

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.timeouts"></a>

```java
public SecuritylakeSubscriberTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference">SecuritylakeSubscriberTimeoutsOutputReference</a>

---

##### `accessTypeInput`<sup>Optional</sup> <a name="accessTypeInput" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.accessTypeInput"></a>

```java
public java.lang.String getAccessTypeInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.sourceInput"></a>

```java
public java.lang.Object getSourceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource">SecuritylakeSubscriberSource</a>>

---

##### `subscriberDescriptionInput`<sup>Optional</sup> <a name="subscriberDescriptionInput" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberDescriptionInput"></a>

```java
public java.lang.String getSubscriberDescriptionInput();
```

- *Type:* java.lang.String

---

##### `subscriberIdentityInput`<sup>Optional</sup> <a name="subscriberIdentityInput" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberIdentityInput"></a>

```java
public java.lang.Object getSubscriberIdentityInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity">SecuritylakeSubscriberSubscriberIdentity</a>>

---

##### `subscriberNameInput`<sup>Optional</sup> <a name="subscriberNameInput" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberNameInput"></a>

```java
public java.lang.String getSubscriberNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts">SecuritylakeSubscriberTimeouts</a>

---

##### `accessType`<sup>Required</sup> <a name="accessType" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.accessType"></a>

```java
public java.lang.String getAccessType();
```

- *Type:* java.lang.String

---

##### `subscriberDescription`<sup>Required</sup> <a name="subscriberDescription" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberDescription"></a>

```java
public java.lang.String getSubscriberDescription();
```

- *Type:* java.lang.String

---

##### `subscriberName`<sup>Required</sup> <a name="subscriberName" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberName"></a>

```java
public java.lang.String getSubscriberName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SecuritylakeSubscriberConfig <a name="SecuritylakeSubscriberConfig" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.securitylake_subscriber.SecuritylakeSubscriberConfig;

SecuritylakeSubscriberConfig.builder()
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
//  .accessType(java.lang.String)
//  .source(IResolvable)
//  .source(java.util.List<SecuritylakeSubscriberSource>)
//  .subscriberDescription(java.lang.String)
//  .subscriberIdentity(IResolvable)
//  .subscriberIdentity(java.util.List<SecuritylakeSubscriberSubscriberIdentity>)
//  .subscriberName(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(SecuritylakeSubscriberTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.accessType">accessType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/securitylake_subscriber#access_type SecuritylakeSubscriber#access_type}. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.source">source</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource">SecuritylakeSubscriberSource</a>></code> | source block. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.subscriberDescription">subscriberDescription</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/securitylake_subscriber#subscriber_description SecuritylakeSubscriber#subscriber_description}. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.subscriberIdentity">subscriberIdentity</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity">SecuritylakeSubscriberSubscriberIdentity</a>></code> | subscriber_identity block. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.subscriberName">subscriberName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/securitylake_subscriber#subscriber_name SecuritylakeSubscriber#subscriber_name}. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/securitylake_subscriber#tags SecuritylakeSubscriber#tags}. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts">SecuritylakeSubscriberTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessType`<sup>Optional</sup> <a name="accessType" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.accessType"></a>

```java
public java.lang.String getAccessType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/securitylake_subscriber#access_type SecuritylakeSubscriber#access_type}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.source"></a>

```java
public java.lang.Object getSource();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource">SecuritylakeSubscriberSource</a>>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/securitylake_subscriber#source SecuritylakeSubscriber#source}

---

##### `subscriberDescription`<sup>Optional</sup> <a name="subscriberDescription" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.subscriberDescription"></a>

```java
public java.lang.String getSubscriberDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/securitylake_subscriber#subscriber_description SecuritylakeSubscriber#subscriber_description}.

---

##### `subscriberIdentity`<sup>Optional</sup> <a name="subscriberIdentity" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.subscriberIdentity"></a>

```java
public java.lang.Object getSubscriberIdentity();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity">SecuritylakeSubscriberSubscriberIdentity</a>>

subscriber_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/securitylake_subscriber#subscriber_identity SecuritylakeSubscriber#subscriber_identity}

---

##### `subscriberName`<sup>Optional</sup> <a name="subscriberName" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.subscriberName"></a>

```java
public java.lang.String getSubscriberName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/securitylake_subscriber#subscriber_name SecuritylakeSubscriber#subscriber_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/securitylake_subscriber#tags SecuritylakeSubscriber#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.timeouts"></a>

```java
public SecuritylakeSubscriberTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts">SecuritylakeSubscriberTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/securitylake_subscriber#timeouts SecuritylakeSubscriber#timeouts}

---

### SecuritylakeSubscriberSource <a name="SecuritylakeSubscriberSource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.securitylake_subscriber.SecuritylakeSubscriberSource;

SecuritylakeSubscriberSource.builder()
//  .awsLogSourceResource(IResolvable)
//  .awsLogSourceResource(java.util.List<SecuritylakeSubscriberSourceAwsLogSourceResource>)
//  .customLogSourceResource(IResolvable)
//  .customLogSourceResource(java.util.List<SecuritylakeSubscriberSourceCustomLogSourceResource>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource.property.awsLogSourceResource">awsLogSourceResource</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource">SecuritylakeSubscriberSourceAwsLogSourceResource</a>></code> | aws_log_source_resource block. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource.property.customLogSourceResource">customLogSourceResource</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource">SecuritylakeSubscriberSourceCustomLogSourceResource</a>></code> | custom_log_source_resource block. |

---

##### `awsLogSourceResource`<sup>Optional</sup> <a name="awsLogSourceResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource.property.awsLogSourceResource"></a>

```java
public java.lang.Object getAwsLogSourceResource();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource">SecuritylakeSubscriberSourceAwsLogSourceResource</a>>

aws_log_source_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/securitylake_subscriber#aws_log_source_resource SecuritylakeSubscriber#aws_log_source_resource}

---

##### `customLogSourceResource`<sup>Optional</sup> <a name="customLogSourceResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource.property.customLogSourceResource"></a>

```java
public java.lang.Object getCustomLogSourceResource();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource">SecuritylakeSubscriberSourceCustomLogSourceResource</a>>

custom_log_source_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/securitylake_subscriber#custom_log_source_resource SecuritylakeSubscriber#custom_log_source_resource}

---

### SecuritylakeSubscriberSourceAwsLogSourceResource <a name="SecuritylakeSubscriberSourceAwsLogSourceResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.securitylake_subscriber.SecuritylakeSubscriberSourceAwsLogSourceResource;

SecuritylakeSubscriberSourceAwsLogSourceResource.builder()
    .sourceName(java.lang.String)
//  .sourceVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource.property.sourceName">sourceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/securitylake_subscriber#source_name SecuritylakeSubscriber#source_name}. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource.property.sourceVersion">sourceVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/securitylake_subscriber#source_version SecuritylakeSubscriber#source_version}. |

---

##### `sourceName`<sup>Required</sup> <a name="sourceName" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource.property.sourceName"></a>

```java
public java.lang.String getSourceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/securitylake_subscriber#source_name SecuritylakeSubscriber#source_name}.

---

##### `sourceVersion`<sup>Optional</sup> <a name="sourceVersion" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource.property.sourceVersion"></a>

```java
public java.lang.String getSourceVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/securitylake_subscriber#source_version SecuritylakeSubscriber#source_version}.

---

### SecuritylakeSubscriberSourceCustomLogSourceResource <a name="SecuritylakeSubscriberSourceCustomLogSourceResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.securitylake_subscriber.SecuritylakeSubscriberSourceCustomLogSourceResource;

SecuritylakeSubscriberSourceCustomLogSourceResource.builder()
    .sourceName(java.lang.String)
//  .sourceVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource.property.sourceName">sourceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/securitylake_subscriber#source_name SecuritylakeSubscriber#source_name}. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource.property.sourceVersion">sourceVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/securitylake_subscriber#source_version SecuritylakeSubscriber#source_version}. |

---

##### `sourceName`<sup>Required</sup> <a name="sourceName" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource.property.sourceName"></a>

```java
public java.lang.String getSourceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/securitylake_subscriber#source_name SecuritylakeSubscriber#source_name}.

---

##### `sourceVersion`<sup>Optional</sup> <a name="sourceVersion" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource.property.sourceVersion"></a>

```java
public java.lang.String getSourceVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/securitylake_subscriber#source_version SecuritylakeSubscriber#source_version}.

---

### SecuritylakeSubscriberSourceCustomLogSourceResourceAttributes <a name="SecuritylakeSubscriberSourceCustomLogSourceResourceAttributes" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.securitylake_subscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributes;

SecuritylakeSubscriberSourceCustomLogSourceResourceAttributes.builder()
    .build();
```


### SecuritylakeSubscriberSourceCustomLogSourceResourceProvider <a name="SecuritylakeSubscriberSourceCustomLogSourceResourceProvider" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProvider"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.securitylake_subscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProvider;

SecuritylakeSubscriberSourceCustomLogSourceResourceProvider.builder()
    .build();
```


### SecuritylakeSubscriberSubscriberIdentity <a name="SecuritylakeSubscriberSubscriberIdentity" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.securitylake_subscriber.SecuritylakeSubscriberSubscriberIdentity;

SecuritylakeSubscriberSubscriberIdentity.builder()
    .externalId(java.lang.String)
    .principal(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity.property.externalId">externalId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/securitylake_subscriber#external_id SecuritylakeSubscriber#external_id}. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity.property.principal">principal</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/securitylake_subscriber#principal SecuritylakeSubscriber#principal}. |

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/securitylake_subscriber#external_id SecuritylakeSubscriber#external_id}.

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity.property.principal"></a>

```java
public java.lang.String getPrincipal();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/securitylake_subscriber#principal SecuritylakeSubscriber#principal}.

---

### SecuritylakeSubscriberTimeouts <a name="SecuritylakeSubscriberTimeouts" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.securitylake_subscriber.SecuritylakeSubscriberTimeouts;

SecuritylakeSubscriberTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/securitylake_subscriber#create SecuritylakeSubscriber#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/securitylake_subscriber#delete SecuritylakeSubscriber#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/securitylake_subscriber#update SecuritylakeSubscriber#update}

---

## Classes <a name="Classes" id="Classes"></a>

### SecuritylakeSubscriberSourceAwsLogSourceResourceList <a name="SecuritylakeSubscriberSourceAwsLogSourceResourceList" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.securitylake_subscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList;

new SecuritylakeSubscriberSourceAwsLogSourceResourceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.get"></a>

```java
public SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource">SecuritylakeSubscriberSourceAwsLogSourceResource</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource">SecuritylakeSubscriberSourceAwsLogSourceResource</a>>

---


### SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference <a name="SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.securitylake_subscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference;

new SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.resetSourceVersion">resetSourceVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSourceVersion` <a name="resetSourceVersion" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.resetSourceVersion"></a>

```java
public void resetSourceVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.sourceNameInput">sourceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.sourceVersionInput">sourceVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.sourceName">sourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.sourceVersion">sourceVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource">SecuritylakeSubscriberSourceAwsLogSourceResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sourceNameInput`<sup>Optional</sup> <a name="sourceNameInput" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.sourceNameInput"></a>

```java
public java.lang.String getSourceNameInput();
```

- *Type:* java.lang.String

---

##### `sourceVersionInput`<sup>Optional</sup> <a name="sourceVersionInput" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.sourceVersionInput"></a>

```java
public java.lang.String getSourceVersionInput();
```

- *Type:* java.lang.String

---

##### `sourceName`<sup>Required</sup> <a name="sourceName" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.sourceName"></a>

```java
public java.lang.String getSourceName();
```

- *Type:* java.lang.String

---

##### `sourceVersion`<sup>Required</sup> <a name="sourceVersion" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.sourceVersion"></a>

```java
public java.lang.String getSourceVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource">SecuritylakeSubscriberSourceAwsLogSourceResource</a>

---


### SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList <a name="SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.securitylake_subscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList;

new SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.get"></a>

```java
public SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference <a name="SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.securitylake_subscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference;

new SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.property.crawlerArn">crawlerArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.property.databaseArn">databaseArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.property.tableArn">tableArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributes">SecuritylakeSubscriberSourceCustomLogSourceResourceAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `crawlerArn`<sup>Required</sup> <a name="crawlerArn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.property.crawlerArn"></a>

```java
public java.lang.String getCrawlerArn();
```

- *Type:* java.lang.String

---

##### `databaseArn`<sup>Required</sup> <a name="databaseArn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.property.databaseArn"></a>

```java
public java.lang.String getDatabaseArn();
```

- *Type:* java.lang.String

---

##### `tableArn`<sup>Required</sup> <a name="tableArn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.property.tableArn"></a>

```java
public java.lang.String getTableArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.property.internalValue"></a>

```java
public SecuritylakeSubscriberSourceCustomLogSourceResourceAttributes getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributes">SecuritylakeSubscriberSourceCustomLogSourceResourceAttributes</a>

---


### SecuritylakeSubscriberSourceCustomLogSourceResourceList <a name="SecuritylakeSubscriberSourceCustomLogSourceResourceList" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.securitylake_subscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList;

new SecuritylakeSubscriberSourceCustomLogSourceResourceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.get"></a>

```java
public SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource">SecuritylakeSubscriberSourceCustomLogSourceResource</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource">SecuritylakeSubscriberSourceCustomLogSourceResource</a>>

---


### SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference <a name="SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.securitylake_subscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference;

new SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.resetSourceVersion">resetSourceVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSourceVersion` <a name="resetSourceVersion" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.resetSourceVersion"></a>

```java
public void resetSourceVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.attributes">attributes</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList">SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.provider">provider</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList">SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.sourceNameInput">sourceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.sourceVersionInput">sourceVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.sourceName">sourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.sourceVersion">sourceVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource">SecuritylakeSubscriberSourceCustomLogSourceResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.attributes"></a>

```java
public SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList getAttributes();
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList">SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList</a>

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.provider"></a>

```java
public SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList getProvider();
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList">SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList</a>

---

##### `sourceNameInput`<sup>Optional</sup> <a name="sourceNameInput" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.sourceNameInput"></a>

```java
public java.lang.String getSourceNameInput();
```

- *Type:* java.lang.String

---

##### `sourceVersionInput`<sup>Optional</sup> <a name="sourceVersionInput" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.sourceVersionInput"></a>

```java
public java.lang.String getSourceVersionInput();
```

- *Type:* java.lang.String

---

##### `sourceName`<sup>Required</sup> <a name="sourceName" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.sourceName"></a>

```java
public java.lang.String getSourceName();
```

- *Type:* java.lang.String

---

##### `sourceVersion`<sup>Required</sup> <a name="sourceVersion" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.sourceVersion"></a>

```java
public java.lang.String getSourceVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource">SecuritylakeSubscriberSourceCustomLogSourceResource</a>

---


### SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList <a name="SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.securitylake_subscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList;

new SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.get"></a>

```java
public SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference <a name="SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.securitylake_subscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference;

new SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProvider">SecuritylakeSubscriberSourceCustomLogSourceResourceProvider</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.property.internalValue"></a>

```java
public SecuritylakeSubscriberSourceCustomLogSourceResourceProvider getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProvider">SecuritylakeSubscriberSourceCustomLogSourceResourceProvider</a>

---


### SecuritylakeSubscriberSourceList <a name="SecuritylakeSubscriberSourceList" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.securitylake_subscriber.SecuritylakeSubscriberSourceList;

new SecuritylakeSubscriberSourceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.get"></a>

```java
public SecuritylakeSubscriberSourceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource">SecuritylakeSubscriberSource</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource">SecuritylakeSubscriberSource</a>>

---


### SecuritylakeSubscriberSourceOutputReference <a name="SecuritylakeSubscriberSourceOutputReference" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.securitylake_subscriber.SecuritylakeSubscriberSourceOutputReference;

new SecuritylakeSubscriberSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.putAwsLogSourceResource">putAwsLogSourceResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.putCustomLogSourceResource">putCustomLogSourceResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.resetAwsLogSourceResource">resetAwsLogSourceResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.resetCustomLogSourceResource">resetCustomLogSourceResource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAwsLogSourceResource` <a name="putAwsLogSourceResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.putAwsLogSourceResource"></a>

```java
public void putAwsLogSourceResource(IResolvable OR java.util.List<SecuritylakeSubscriberSourceAwsLogSourceResource> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.putAwsLogSourceResource.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource">SecuritylakeSubscriberSourceAwsLogSourceResource</a>>

---

##### `putCustomLogSourceResource` <a name="putCustomLogSourceResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.putCustomLogSourceResource"></a>

```java
public void putCustomLogSourceResource(IResolvable OR java.util.List<SecuritylakeSubscriberSourceCustomLogSourceResource> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.putCustomLogSourceResource.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource">SecuritylakeSubscriberSourceCustomLogSourceResource</a>>

---

##### `resetAwsLogSourceResource` <a name="resetAwsLogSourceResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.resetAwsLogSourceResource"></a>

```java
public void resetAwsLogSourceResource()
```

##### `resetCustomLogSourceResource` <a name="resetCustomLogSourceResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.resetCustomLogSourceResource"></a>

```java
public void resetCustomLogSourceResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.awsLogSourceResource">awsLogSourceResource</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList">SecuritylakeSubscriberSourceAwsLogSourceResourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.customLogSourceResource">customLogSourceResource</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList">SecuritylakeSubscriberSourceCustomLogSourceResourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.awsLogSourceResourceInput">awsLogSourceResourceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource">SecuritylakeSubscriberSourceAwsLogSourceResource</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.customLogSourceResourceInput">customLogSourceResourceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource">SecuritylakeSubscriberSourceCustomLogSourceResource</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource">SecuritylakeSubscriberSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsLogSourceResource`<sup>Required</sup> <a name="awsLogSourceResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.awsLogSourceResource"></a>

```java
public SecuritylakeSubscriberSourceAwsLogSourceResourceList getAwsLogSourceResource();
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList">SecuritylakeSubscriberSourceAwsLogSourceResourceList</a>

---

##### `customLogSourceResource`<sup>Required</sup> <a name="customLogSourceResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.customLogSourceResource"></a>

```java
public SecuritylakeSubscriberSourceCustomLogSourceResourceList getCustomLogSourceResource();
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList">SecuritylakeSubscriberSourceCustomLogSourceResourceList</a>

---

##### `awsLogSourceResourceInput`<sup>Optional</sup> <a name="awsLogSourceResourceInput" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.awsLogSourceResourceInput"></a>

```java
public java.lang.Object getAwsLogSourceResourceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource">SecuritylakeSubscriberSourceAwsLogSourceResource</a>>

---

##### `customLogSourceResourceInput`<sup>Optional</sup> <a name="customLogSourceResourceInput" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.customLogSourceResourceInput"></a>

```java
public java.lang.Object getCustomLogSourceResourceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource">SecuritylakeSubscriberSourceCustomLogSourceResource</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource">SecuritylakeSubscriberSource</a>

---


### SecuritylakeSubscriberSubscriberIdentityList <a name="SecuritylakeSubscriberSubscriberIdentityList" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.securitylake_subscriber.SecuritylakeSubscriberSubscriberIdentityList;

new SecuritylakeSubscriberSubscriberIdentityList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.get"></a>

```java
public SecuritylakeSubscriberSubscriberIdentityOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity">SecuritylakeSubscriberSubscriberIdentity</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity">SecuritylakeSubscriberSubscriberIdentity</a>>

---


### SecuritylakeSubscriberSubscriberIdentityOutputReference <a name="SecuritylakeSubscriberSubscriberIdentityOutputReference" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.securitylake_subscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference;

new SecuritylakeSubscriberSubscriberIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.externalIdInput">externalIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.principalInput">principalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.externalId">externalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.principal">principal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity">SecuritylakeSubscriberSubscriberIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.externalIdInput"></a>

```java
public java.lang.String getExternalIdInput();
```

- *Type:* java.lang.String

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.principalInput"></a>

```java
public java.lang.String getPrincipalInput();
```

- *Type:* java.lang.String

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.principal"></a>

```java
public java.lang.String getPrincipal();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity">SecuritylakeSubscriberSubscriberIdentity</a>

---


### SecuritylakeSubscriberTimeoutsOutputReference <a name="SecuritylakeSubscriberTimeoutsOutputReference" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.securitylake_subscriber.SecuritylakeSubscriberTimeoutsOutputReference;

new SecuritylakeSubscriberTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts">SecuritylakeSubscriberTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts">SecuritylakeSubscriberTimeouts</a>

---



