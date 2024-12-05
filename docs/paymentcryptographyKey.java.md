# `paymentcryptographyKey` Submodule <a name="`paymentcryptographyKey` Submodule" id="@cdktf/provider-aws.paymentcryptographyKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PaymentcryptographyKey <a name="PaymentcryptographyKey" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/paymentcryptography_key aws_paymentcryptography_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.paymentcryptography_key.PaymentcryptographyKey;

PaymentcryptographyKey.Builder.create(Construct scope, java.lang.String id)
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
    .exportable(java.lang.Boolean)
    .exportable(IResolvable)
//  .deletionWindowInDays(java.lang.Number)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .keyAttributes(PaymentcryptographyKeyKeyAttributes)
//  .keyCheckValueAlgorithm(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(PaymentcryptographyKeyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.exportable">exportable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/paymentcryptography_key#exportable PaymentcryptographyKey#exportable}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.deletionWindowInDays">deletionWindowInDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/paymentcryptography_key#deletion_window_in_days PaymentcryptographyKey#deletion_window_in_days}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/paymentcryptography_key#enabled PaymentcryptographyKey#enabled}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.keyAttributes">keyAttributes</a></code> | <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes">PaymentcryptographyKeyKeyAttributes</a></code> | key_attributes block. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.keyCheckValueAlgorithm">keyCheckValueAlgorithm</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/paymentcryptography_key#key_check_value_algorithm PaymentcryptographyKey#key_check_value_algorithm}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/paymentcryptography_key#tags PaymentcryptographyKey#tags}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeouts">PaymentcryptographyKeyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `exportable`<sup>Required</sup> <a name="exportable" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.exportable"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/paymentcryptography_key#exportable PaymentcryptographyKey#exportable}.

---

##### `deletionWindowInDays`<sup>Optional</sup> <a name="deletionWindowInDays" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.deletionWindowInDays"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/paymentcryptography_key#deletion_window_in_days PaymentcryptographyKey#deletion_window_in_days}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/paymentcryptography_key#enabled PaymentcryptographyKey#enabled}.

---

##### `keyAttributes`<sup>Optional</sup> <a name="keyAttributes" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.keyAttributes"></a>

- *Type:* <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes">PaymentcryptographyKeyKeyAttributes</a>

key_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/paymentcryptography_key#key_attributes PaymentcryptographyKey#key_attributes}

---

##### `keyCheckValueAlgorithm`<sup>Optional</sup> <a name="keyCheckValueAlgorithm" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.keyCheckValueAlgorithm"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/paymentcryptography_key#key_check_value_algorithm PaymentcryptographyKey#key_check_value_algorithm}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/paymentcryptography_key#tags PaymentcryptographyKey#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeouts">PaymentcryptographyKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/paymentcryptography_key#timeouts PaymentcryptographyKey#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.putKeyAttributes">putKeyAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.resetDeletionWindowInDays">resetDeletionWindowInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.resetKeyAttributes">resetKeyAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.resetKeyCheckValueAlgorithm">resetKeyCheckValueAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putKeyAttributes` <a name="putKeyAttributes" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.putKeyAttributes"></a>

```java
public void putKeyAttributes(PaymentcryptographyKeyKeyAttributes value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.putKeyAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes">PaymentcryptographyKeyKeyAttributes</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.putTimeouts"></a>

```java
public void putTimeouts(PaymentcryptographyKeyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeouts">PaymentcryptographyKeyTimeouts</a>

---

##### `resetDeletionWindowInDays` <a name="resetDeletionWindowInDays" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.resetDeletionWindowInDays"></a>

```java
public void resetDeletionWindowInDays()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetKeyAttributes` <a name="resetKeyAttributes" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.resetKeyAttributes"></a>

```java
public void resetKeyAttributes()
```

##### `resetKeyCheckValueAlgorithm` <a name="resetKeyCheckValueAlgorithm" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.resetKeyCheckValueAlgorithm"></a>

```java
public void resetKeyCheckValueAlgorithm()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PaymentcryptographyKey resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.paymentcryptography_key.PaymentcryptographyKey;

PaymentcryptographyKey.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.paymentcryptography_key.PaymentcryptographyKey;

PaymentcryptographyKey.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.paymentcryptography_key.PaymentcryptographyKey;

PaymentcryptographyKey.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.paymentcryptography_key.PaymentcryptographyKey;

PaymentcryptographyKey.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PaymentcryptographyKey.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a PaymentcryptographyKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PaymentcryptographyKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PaymentcryptographyKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/paymentcryptography_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the PaymentcryptographyKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.keyAttributes">keyAttributes</a></code> | <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference">PaymentcryptographyKeyKeyAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.keyCheckValue">keyCheckValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.keyOrigin">keyOrigin</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.keyState">keyState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.tagsAll">tagsAll</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference">PaymentcryptographyKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.deletionWindowInDaysInput">deletionWindowInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.exportableInput">exportableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.keyAttributesInput">keyAttributesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes">PaymentcryptographyKeyKeyAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.keyCheckValueAlgorithmInput">keyCheckValueAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeouts">PaymentcryptographyKeyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.deletionWindowInDays">deletionWindowInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.exportable">exportable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.keyCheckValueAlgorithm">keyCheckValueAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `keyAttributes`<sup>Required</sup> <a name="keyAttributes" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.keyAttributes"></a>

```java
public PaymentcryptographyKeyKeyAttributesOutputReference getKeyAttributes();
```

- *Type:* <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference">PaymentcryptographyKeyKeyAttributesOutputReference</a>

---

##### `keyCheckValue`<sup>Required</sup> <a name="keyCheckValue" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.keyCheckValue"></a>

```java
public java.lang.String getKeyCheckValue();
```

- *Type:* java.lang.String

---

##### `keyOrigin`<sup>Required</sup> <a name="keyOrigin" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.keyOrigin"></a>

```java
public java.lang.String getKeyOrigin();
```

- *Type:* java.lang.String

---

##### `keyState`<sup>Required</sup> <a name="keyState" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.keyState"></a>

```java
public java.lang.String getKeyState();
```

- *Type:* java.lang.String

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.timeouts"></a>

```java
public PaymentcryptographyKeyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference">PaymentcryptographyKeyTimeoutsOutputReference</a>

---

##### `deletionWindowInDaysInput`<sup>Optional</sup> <a name="deletionWindowInDaysInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.deletionWindowInDaysInput"></a>

```java
public java.lang.Number getDeletionWindowInDaysInput();
```

- *Type:* java.lang.Number

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `exportableInput`<sup>Optional</sup> <a name="exportableInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.exportableInput"></a>

```java
public java.lang.Object getExportableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `keyAttributesInput`<sup>Optional</sup> <a name="keyAttributesInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.keyAttributesInput"></a>

```java
public java.lang.Object getKeyAttributesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes">PaymentcryptographyKeyKeyAttributes</a>

---

##### `keyCheckValueAlgorithmInput`<sup>Optional</sup> <a name="keyCheckValueAlgorithmInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.keyCheckValueAlgorithmInput"></a>

```java
public java.lang.String getKeyCheckValueAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeouts">PaymentcryptographyKeyTimeouts</a>

---

##### `deletionWindowInDays`<sup>Required</sup> <a name="deletionWindowInDays" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.deletionWindowInDays"></a>

```java
public java.lang.Number getDeletionWindowInDays();
```

- *Type:* java.lang.Number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `exportable`<sup>Required</sup> <a name="exportable" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.exportable"></a>

```java
public java.lang.Object getExportable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `keyCheckValueAlgorithm`<sup>Required</sup> <a name="keyCheckValueAlgorithm" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.keyCheckValueAlgorithm"></a>

```java
public java.lang.String getKeyCheckValueAlgorithm();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PaymentcryptographyKeyConfig <a name="PaymentcryptographyKeyConfig" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.paymentcryptography_key.PaymentcryptographyKeyConfig;

PaymentcryptographyKeyConfig.builder()
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
    .exportable(java.lang.Boolean)
    .exportable(IResolvable)
//  .deletionWindowInDays(java.lang.Number)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .keyAttributes(PaymentcryptographyKeyKeyAttributes)
//  .keyCheckValueAlgorithm(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(PaymentcryptographyKeyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.exportable">exportable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/paymentcryptography_key#exportable PaymentcryptographyKey#exportable}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.deletionWindowInDays">deletionWindowInDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/paymentcryptography_key#deletion_window_in_days PaymentcryptographyKey#deletion_window_in_days}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/paymentcryptography_key#enabled PaymentcryptographyKey#enabled}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.keyAttributes">keyAttributes</a></code> | <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes">PaymentcryptographyKeyKeyAttributes</a></code> | key_attributes block. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.keyCheckValueAlgorithm">keyCheckValueAlgorithm</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/paymentcryptography_key#key_check_value_algorithm PaymentcryptographyKey#key_check_value_algorithm}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/paymentcryptography_key#tags PaymentcryptographyKey#tags}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeouts">PaymentcryptographyKeyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `exportable`<sup>Required</sup> <a name="exportable" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.exportable"></a>

```java
public java.lang.Object getExportable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/paymentcryptography_key#exportable PaymentcryptographyKey#exportable}.

---

##### `deletionWindowInDays`<sup>Optional</sup> <a name="deletionWindowInDays" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.deletionWindowInDays"></a>

```java
public java.lang.Number getDeletionWindowInDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/paymentcryptography_key#deletion_window_in_days PaymentcryptographyKey#deletion_window_in_days}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/paymentcryptography_key#enabled PaymentcryptographyKey#enabled}.

---

##### `keyAttributes`<sup>Optional</sup> <a name="keyAttributes" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.keyAttributes"></a>

```java
public PaymentcryptographyKeyKeyAttributes getKeyAttributes();
```

- *Type:* <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes">PaymentcryptographyKeyKeyAttributes</a>

key_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/paymentcryptography_key#key_attributes PaymentcryptographyKey#key_attributes}

---

##### `keyCheckValueAlgorithm`<sup>Optional</sup> <a name="keyCheckValueAlgorithm" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.keyCheckValueAlgorithm"></a>

```java
public java.lang.String getKeyCheckValueAlgorithm();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/paymentcryptography_key#key_check_value_algorithm PaymentcryptographyKey#key_check_value_algorithm}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/paymentcryptography_key#tags PaymentcryptographyKey#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.timeouts"></a>

```java
public PaymentcryptographyKeyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeouts">PaymentcryptographyKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/paymentcryptography_key#timeouts PaymentcryptographyKey#timeouts}

---

### PaymentcryptographyKeyKeyAttributes <a name="PaymentcryptographyKeyKeyAttributes" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.paymentcryptography_key.PaymentcryptographyKeyKeyAttributes;

PaymentcryptographyKeyKeyAttributes.builder()
    .keyAlgorithm(java.lang.String)
    .keyClass(java.lang.String)
    .keyUsage(java.lang.String)
//  .keyModesOfUse(PaymentcryptographyKeyKeyAttributesKeyModesOfUse)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes.property.keyAlgorithm">keyAlgorithm</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/paymentcryptography_key#key_algorithm PaymentcryptographyKey#key_algorithm}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes.property.keyClass">keyClass</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/paymentcryptography_key#key_class PaymentcryptographyKey#key_class}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes.property.keyUsage">keyUsage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/paymentcryptography_key#key_usage PaymentcryptographyKey#key_usage}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes.property.keyModesOfUse">keyModesOfUse</a></code> | <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse">PaymentcryptographyKeyKeyAttributesKeyModesOfUse</a></code> | key_modes_of_use block. |

---

##### `keyAlgorithm`<sup>Required</sup> <a name="keyAlgorithm" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes.property.keyAlgorithm"></a>

```java
public java.lang.String getKeyAlgorithm();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/paymentcryptography_key#key_algorithm PaymentcryptographyKey#key_algorithm}.

---

##### `keyClass`<sup>Required</sup> <a name="keyClass" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes.property.keyClass"></a>

```java
public java.lang.String getKeyClass();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/paymentcryptography_key#key_class PaymentcryptographyKey#key_class}.

---

##### `keyUsage`<sup>Required</sup> <a name="keyUsage" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes.property.keyUsage"></a>

```java
public java.lang.String getKeyUsage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/paymentcryptography_key#key_usage PaymentcryptographyKey#key_usage}.

---

##### `keyModesOfUse`<sup>Optional</sup> <a name="keyModesOfUse" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes.property.keyModesOfUse"></a>

```java
public PaymentcryptographyKeyKeyAttributesKeyModesOfUse getKeyModesOfUse();
```

- *Type:* <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse">PaymentcryptographyKeyKeyAttributesKeyModesOfUse</a>

key_modes_of_use block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/paymentcryptography_key#key_modes_of_use PaymentcryptographyKey#key_modes_of_use}

---

### PaymentcryptographyKeyKeyAttributesKeyModesOfUse <a name="PaymentcryptographyKeyKeyAttributesKeyModesOfUse" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.paymentcryptography_key.PaymentcryptographyKeyKeyAttributesKeyModesOfUse;

PaymentcryptographyKeyKeyAttributesKeyModesOfUse.builder()
//  .decrypt(java.lang.Boolean)
//  .decrypt(IResolvable)
//  .deriveKey(java.lang.Boolean)
//  .deriveKey(IResolvable)
//  .encrypt(java.lang.Boolean)
//  .encrypt(IResolvable)
//  .generate(java.lang.Boolean)
//  .generate(IResolvable)
//  .noRestrictions(java.lang.Boolean)
//  .noRestrictions(IResolvable)
//  .sign(java.lang.Boolean)
//  .sign(IResolvable)
//  .unwrap(java.lang.Boolean)
//  .unwrap(IResolvable)
//  .verify(java.lang.Boolean)
//  .verify(IResolvable)
//  .wrap(java.lang.Boolean)
//  .wrap(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.decrypt">decrypt</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/paymentcryptography_key#decrypt PaymentcryptographyKey#decrypt}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.deriveKey">deriveKey</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/paymentcryptography_key#derive_key PaymentcryptographyKey#derive_key}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.encrypt">encrypt</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/paymentcryptography_key#encrypt PaymentcryptographyKey#encrypt}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.generate">generate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/paymentcryptography_key#generate PaymentcryptographyKey#generate}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.noRestrictions">noRestrictions</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/paymentcryptography_key#no_restrictions PaymentcryptographyKey#no_restrictions}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.sign">sign</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/paymentcryptography_key#sign PaymentcryptographyKey#sign}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.unwrap">unwrap</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/paymentcryptography_key#unwrap PaymentcryptographyKey#unwrap}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.verify">verify</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/paymentcryptography_key#verify PaymentcryptographyKey#verify}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.wrap">wrap</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/paymentcryptography_key#wrap PaymentcryptographyKey#wrap}. |

---

##### `decrypt`<sup>Optional</sup> <a name="decrypt" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.decrypt"></a>

```java
public java.lang.Object getDecrypt();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/paymentcryptography_key#decrypt PaymentcryptographyKey#decrypt}.

---

##### `deriveKey`<sup>Optional</sup> <a name="deriveKey" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.deriveKey"></a>

```java
public java.lang.Object getDeriveKey();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/paymentcryptography_key#derive_key PaymentcryptographyKey#derive_key}.

---

##### `encrypt`<sup>Optional</sup> <a name="encrypt" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.encrypt"></a>

```java
public java.lang.Object getEncrypt();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/paymentcryptography_key#encrypt PaymentcryptographyKey#encrypt}.

---

##### `generate`<sup>Optional</sup> <a name="generate" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.generate"></a>

```java
public java.lang.Object getGenerate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/paymentcryptography_key#generate PaymentcryptographyKey#generate}.

---

##### `noRestrictions`<sup>Optional</sup> <a name="noRestrictions" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.noRestrictions"></a>

```java
public java.lang.Object getNoRestrictions();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/paymentcryptography_key#no_restrictions PaymentcryptographyKey#no_restrictions}.

---

##### `sign`<sup>Optional</sup> <a name="sign" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.sign"></a>

```java
public java.lang.Object getSign();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/paymentcryptography_key#sign PaymentcryptographyKey#sign}.

---

##### `unwrap`<sup>Optional</sup> <a name="unwrap" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.unwrap"></a>

```java
public java.lang.Object getUnwrap();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/paymentcryptography_key#unwrap PaymentcryptographyKey#unwrap}.

---

##### `verify`<sup>Optional</sup> <a name="verify" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.verify"></a>

```java
public java.lang.Object getVerify();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/paymentcryptography_key#verify PaymentcryptographyKey#verify}.

---

##### `wrap`<sup>Optional</sup> <a name="wrap" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.wrap"></a>

```java
public java.lang.Object getWrap();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/paymentcryptography_key#wrap PaymentcryptographyKey#wrap}.

---

### PaymentcryptographyKeyTimeouts <a name="PaymentcryptographyKeyTimeouts" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.paymentcryptography_key.PaymentcryptographyKeyTimeouts;

PaymentcryptographyKeyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/paymentcryptography_key#create PaymentcryptographyKey#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/paymentcryptography_key#delete PaymentcryptographyKey#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/paymentcryptography_key#update PaymentcryptographyKey#update}

---

## Classes <a name="Classes" id="Classes"></a>

### PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference <a name="PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.paymentcryptography_key.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference;

new PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetDecrypt">resetDecrypt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetDeriveKey">resetDeriveKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetEncrypt">resetEncrypt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetGenerate">resetGenerate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetNoRestrictions">resetNoRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetSign">resetSign</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetUnwrap">resetUnwrap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetVerify">resetVerify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetWrap">resetWrap</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDecrypt` <a name="resetDecrypt" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetDecrypt"></a>

```java
public void resetDecrypt()
```

##### `resetDeriveKey` <a name="resetDeriveKey" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetDeriveKey"></a>

```java
public void resetDeriveKey()
```

##### `resetEncrypt` <a name="resetEncrypt" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetEncrypt"></a>

```java
public void resetEncrypt()
```

##### `resetGenerate` <a name="resetGenerate" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetGenerate"></a>

```java
public void resetGenerate()
```

##### `resetNoRestrictions` <a name="resetNoRestrictions" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetNoRestrictions"></a>

```java
public void resetNoRestrictions()
```

##### `resetSign` <a name="resetSign" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetSign"></a>

```java
public void resetSign()
```

##### `resetUnwrap` <a name="resetUnwrap" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetUnwrap"></a>

```java
public void resetUnwrap()
```

##### `resetVerify` <a name="resetVerify" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetVerify"></a>

```java
public void resetVerify()
```

##### `resetWrap` <a name="resetWrap" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetWrap"></a>

```java
public void resetWrap()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.decryptInput">decryptInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.deriveKeyInput">deriveKeyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.encryptInput">encryptInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.generateInput">generateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.noRestrictionsInput">noRestrictionsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.signInput">signInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.unwrapInput">unwrapInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.verifyInput">verifyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.wrapInput">wrapInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.decrypt">decrypt</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.deriveKey">deriveKey</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.encrypt">encrypt</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.generate">generate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.noRestrictions">noRestrictions</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.sign">sign</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.unwrap">unwrap</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.verify">verify</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.wrap">wrap</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse">PaymentcryptographyKeyKeyAttributesKeyModesOfUse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `decryptInput`<sup>Optional</sup> <a name="decryptInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.decryptInput"></a>

```java
public java.lang.Object getDecryptInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deriveKeyInput`<sup>Optional</sup> <a name="deriveKeyInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.deriveKeyInput"></a>

```java
public java.lang.Object getDeriveKeyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `encryptInput`<sup>Optional</sup> <a name="encryptInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.encryptInput"></a>

```java
public java.lang.Object getEncryptInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `generateInput`<sup>Optional</sup> <a name="generateInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.generateInput"></a>

```java
public java.lang.Object getGenerateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `noRestrictionsInput`<sup>Optional</sup> <a name="noRestrictionsInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.noRestrictionsInput"></a>

```java
public java.lang.Object getNoRestrictionsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `signInput`<sup>Optional</sup> <a name="signInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.signInput"></a>

```java
public java.lang.Object getSignInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `unwrapInput`<sup>Optional</sup> <a name="unwrapInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.unwrapInput"></a>

```java
public java.lang.Object getUnwrapInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `verifyInput`<sup>Optional</sup> <a name="verifyInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.verifyInput"></a>

```java
public java.lang.Object getVerifyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `wrapInput`<sup>Optional</sup> <a name="wrapInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.wrapInput"></a>

```java
public java.lang.Object getWrapInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `decrypt`<sup>Required</sup> <a name="decrypt" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.decrypt"></a>

```java
public java.lang.Object getDecrypt();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deriveKey`<sup>Required</sup> <a name="deriveKey" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.deriveKey"></a>

```java
public java.lang.Object getDeriveKey();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `encrypt`<sup>Required</sup> <a name="encrypt" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.encrypt"></a>

```java
public java.lang.Object getEncrypt();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `generate`<sup>Required</sup> <a name="generate" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.generate"></a>

```java
public java.lang.Object getGenerate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `noRestrictions`<sup>Required</sup> <a name="noRestrictions" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.noRestrictions"></a>

```java
public java.lang.Object getNoRestrictions();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sign`<sup>Required</sup> <a name="sign" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.sign"></a>

```java
public java.lang.Object getSign();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `unwrap`<sup>Required</sup> <a name="unwrap" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.unwrap"></a>

```java
public java.lang.Object getUnwrap();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `verify`<sup>Required</sup> <a name="verify" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.verify"></a>

```java
public java.lang.Object getVerify();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `wrap`<sup>Required</sup> <a name="wrap" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.wrap"></a>

```java
public java.lang.Object getWrap();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse">PaymentcryptographyKeyKeyAttributesKeyModesOfUse</a>

---


### PaymentcryptographyKeyKeyAttributesOutputReference <a name="PaymentcryptographyKeyKeyAttributesOutputReference" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.paymentcryptography_key.PaymentcryptographyKeyKeyAttributesOutputReference;

new PaymentcryptographyKeyKeyAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.putKeyModesOfUse">putKeyModesOfUse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.resetKeyModesOfUse">resetKeyModesOfUse</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putKeyModesOfUse` <a name="putKeyModesOfUse" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.putKeyModesOfUse"></a>

```java
public void putKeyModesOfUse(PaymentcryptographyKeyKeyAttributesKeyModesOfUse value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.putKeyModesOfUse.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse">PaymentcryptographyKeyKeyAttributesKeyModesOfUse</a>

---

##### `resetKeyModesOfUse` <a name="resetKeyModesOfUse" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.resetKeyModesOfUse"></a>

```java
public void resetKeyModesOfUse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyModesOfUse">keyModesOfUse</a></code> | <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference">PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyAlgorithmInput">keyAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyClassInput">keyClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyModesOfUseInput">keyModesOfUseInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse">PaymentcryptographyKeyKeyAttributesKeyModesOfUse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyUsageInput">keyUsageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyAlgorithm">keyAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyClass">keyClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyUsage">keyUsage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes">PaymentcryptographyKeyKeyAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyModesOfUse`<sup>Required</sup> <a name="keyModesOfUse" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyModesOfUse"></a>

```java
public PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference getKeyModesOfUse();
```

- *Type:* <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference">PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference</a>

---

##### `keyAlgorithmInput`<sup>Optional</sup> <a name="keyAlgorithmInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyAlgorithmInput"></a>

```java
public java.lang.String getKeyAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `keyClassInput`<sup>Optional</sup> <a name="keyClassInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyClassInput"></a>

```java
public java.lang.String getKeyClassInput();
```

- *Type:* java.lang.String

---

##### `keyModesOfUseInput`<sup>Optional</sup> <a name="keyModesOfUseInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyModesOfUseInput"></a>

```java
public java.lang.Object getKeyModesOfUseInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse">PaymentcryptographyKeyKeyAttributesKeyModesOfUse</a>

---

##### `keyUsageInput`<sup>Optional</sup> <a name="keyUsageInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyUsageInput"></a>

```java
public java.lang.String getKeyUsageInput();
```

- *Type:* java.lang.String

---

##### `keyAlgorithm`<sup>Required</sup> <a name="keyAlgorithm" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyAlgorithm"></a>

```java
public java.lang.String getKeyAlgorithm();
```

- *Type:* java.lang.String

---

##### `keyClass`<sup>Required</sup> <a name="keyClass" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyClass"></a>

```java
public java.lang.String getKeyClass();
```

- *Type:* java.lang.String

---

##### `keyUsage`<sup>Required</sup> <a name="keyUsage" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyUsage"></a>

```java
public java.lang.String getKeyUsage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes">PaymentcryptographyKeyKeyAttributes</a>

---


### PaymentcryptographyKeyTimeoutsOutputReference <a name="PaymentcryptographyKeyTimeoutsOutputReference" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.paymentcryptography_key.PaymentcryptographyKeyTimeoutsOutputReference;

new PaymentcryptographyKeyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeouts">PaymentcryptographyKeyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeouts">PaymentcryptographyKeyTimeouts</a>

---



