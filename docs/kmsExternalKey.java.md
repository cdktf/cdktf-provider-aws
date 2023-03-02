# `kmsExternalKey` Submodule <a name="`kmsExternalKey` Submodule" id="@cdktf/provider-aws.kmsExternalKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmsExternalKey <a name="KmsExternalKey" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key aws_kms_external_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.kms_external_key.KmsExternalKey;

KmsExternalKey.Builder.create(Construct scope, java.lang.String id)
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
//  .bypassPolicyLockoutSafetyCheck(java.lang.Boolean)
//  .bypassPolicyLockoutSafetyCheck(IResolvable)
//  .deletionWindowInDays(java.lang.Number)
//  .description(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .keyMaterialBase64(java.lang.String)
//  .multiRegion(java.lang.Boolean)
//  .multiRegion(IResolvable)
//  .policy(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .validTo(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.Initializer.parameter.bypassPolicyLockoutSafetyCheck">bypassPolicyLockoutSafetyCheck</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#bypass_policy_lockout_safety_check KmsExternalKey#bypass_policy_lockout_safety_check}. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.Initializer.parameter.deletionWindowInDays">deletionWindowInDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#deletion_window_in_days KmsExternalKey#deletion_window_in_days}. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#description KmsExternalKey#description}. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#enabled KmsExternalKey#enabled}. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#id KmsExternalKey#id}. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.Initializer.parameter.keyMaterialBase64">keyMaterialBase64</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#key_material_base64 KmsExternalKey#key_material_base64}. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.Initializer.parameter.multiRegion">multiRegion</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#multi_region KmsExternalKey#multi_region}. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.Initializer.parameter.policy">policy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#policy KmsExternalKey#policy}. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#tags KmsExternalKey#tags}. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#tags_all KmsExternalKey#tags_all}. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.Initializer.parameter.validTo">validTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#valid_to KmsExternalKey#valid_to}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bypassPolicyLockoutSafetyCheck`<sup>Optional</sup> <a name="bypassPolicyLockoutSafetyCheck" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.Initializer.parameter.bypassPolicyLockoutSafetyCheck"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#bypass_policy_lockout_safety_check KmsExternalKey#bypass_policy_lockout_safety_check}.

---

##### `deletionWindowInDays`<sup>Optional</sup> <a name="deletionWindowInDays" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.Initializer.parameter.deletionWindowInDays"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#deletion_window_in_days KmsExternalKey#deletion_window_in_days}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#description KmsExternalKey#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#enabled KmsExternalKey#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#id KmsExternalKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyMaterialBase64`<sup>Optional</sup> <a name="keyMaterialBase64" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.Initializer.parameter.keyMaterialBase64"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#key_material_base64 KmsExternalKey#key_material_base64}.

---

##### `multiRegion`<sup>Optional</sup> <a name="multiRegion" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.Initializer.parameter.multiRegion"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#multi_region KmsExternalKey#multi_region}.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.Initializer.parameter.policy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#policy KmsExternalKey#policy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#tags KmsExternalKey#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#tags_all KmsExternalKey#tags_all}.

---

##### `validTo`<sup>Optional</sup> <a name="validTo" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.Initializer.parameter.validTo"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#valid_to KmsExternalKey#valid_to}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetBypassPolicyLockoutSafetyCheck">resetBypassPolicyLockoutSafetyCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetDeletionWindowInDays">resetDeletionWindowInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetKeyMaterialBase64">resetKeyMaterialBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetMultiRegion">resetMultiRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetPolicy">resetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetValidTo">resetValidTo</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetBypassPolicyLockoutSafetyCheck` <a name="resetBypassPolicyLockoutSafetyCheck" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetBypassPolicyLockoutSafetyCheck"></a>

```java
public void resetBypassPolicyLockoutSafetyCheck()
```

##### `resetDeletionWindowInDays` <a name="resetDeletionWindowInDays" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetDeletionWindowInDays"></a>

```java
public void resetDeletionWindowInDays()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetId"></a>

```java
public void resetId()
```

##### `resetKeyMaterialBase64` <a name="resetKeyMaterialBase64" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetKeyMaterialBase64"></a>

```java
public void resetKeyMaterialBase64()
```

##### `resetMultiRegion` <a name="resetMultiRegion" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetMultiRegion"></a>

```java
public void resetMultiRegion()
```

##### `resetPolicy` <a name="resetPolicy" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetPolicy"></a>

```java
public void resetPolicy()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetValidTo` <a name="resetValidTo" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetValidTo"></a>

```java
public void resetValidTo()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.kms_external_key.KmsExternalKey;

KmsExternalKey.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.kms_external_key.KmsExternalKey;

KmsExternalKey.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.kms_external_key.KmsExternalKey;

KmsExternalKey.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.expirationModel">expirationModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.keyState">keyState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.keyUsage">keyUsage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.bypassPolicyLockoutSafetyCheckInput">bypassPolicyLockoutSafetyCheckInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.deletionWindowInDaysInput">deletionWindowInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.keyMaterialBase64Input">keyMaterialBase64Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.multiRegionInput">multiRegionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.policyInput">policyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.validToInput">validToInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.bypassPolicyLockoutSafetyCheck">bypassPolicyLockoutSafetyCheck</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.deletionWindowInDays">deletionWindowInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.keyMaterialBase64">keyMaterialBase64</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.multiRegion">multiRegion</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.policy">policy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.validTo">validTo</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `expirationModel`<sup>Required</sup> <a name="expirationModel" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.expirationModel"></a>

```java
public java.lang.String getExpirationModel();
```

- *Type:* java.lang.String

---

##### `keyState`<sup>Required</sup> <a name="keyState" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.keyState"></a>

```java
public java.lang.String getKeyState();
```

- *Type:* java.lang.String

---

##### `keyUsage`<sup>Required</sup> <a name="keyUsage" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.keyUsage"></a>

```java
public java.lang.String getKeyUsage();
```

- *Type:* java.lang.String

---

##### `bypassPolicyLockoutSafetyCheckInput`<sup>Optional</sup> <a name="bypassPolicyLockoutSafetyCheckInput" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.bypassPolicyLockoutSafetyCheckInput"></a>

```java
public java.lang.Object getBypassPolicyLockoutSafetyCheckInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deletionWindowInDaysInput`<sup>Optional</sup> <a name="deletionWindowInDaysInput" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.deletionWindowInDaysInput"></a>

```java
public java.lang.Number getDeletionWindowInDaysInput();
```

- *Type:* java.lang.Number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keyMaterialBase64Input`<sup>Optional</sup> <a name="keyMaterialBase64Input" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.keyMaterialBase64Input"></a>

```java
public java.lang.String getKeyMaterialBase64Input();
```

- *Type:* java.lang.String

---

##### `multiRegionInput`<sup>Optional</sup> <a name="multiRegionInput" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.multiRegionInput"></a>

```java
public java.lang.Object getMultiRegionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.policyInput"></a>

```java
public java.lang.String getPolicyInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `validToInput`<sup>Optional</sup> <a name="validToInput" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.validToInput"></a>

```java
public java.lang.String getValidToInput();
```

- *Type:* java.lang.String

---

##### `bypassPolicyLockoutSafetyCheck`<sup>Required</sup> <a name="bypassPolicyLockoutSafetyCheck" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.bypassPolicyLockoutSafetyCheck"></a>

```java
public java.lang.Object getBypassPolicyLockoutSafetyCheck();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deletionWindowInDays`<sup>Required</sup> <a name="deletionWindowInDays" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.deletionWindowInDays"></a>

```java
public java.lang.Number getDeletionWindowInDays();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `keyMaterialBase64`<sup>Required</sup> <a name="keyMaterialBase64" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.keyMaterialBase64"></a>

```java
public java.lang.String getKeyMaterialBase64();
```

- *Type:* java.lang.String

---

##### `multiRegion`<sup>Required</sup> <a name="multiRegion" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.multiRegion"></a>

```java
public java.lang.Object getMultiRegion();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `validTo`<sup>Required</sup> <a name="validTo" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.validTo"></a>

```java
public java.lang.String getValidTo();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### KmsExternalKeyConfig <a name="KmsExternalKeyConfig" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.kms_external_key.KmsExternalKeyConfig;

KmsExternalKeyConfig.builder()
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
//  .bypassPolicyLockoutSafetyCheck(java.lang.Boolean)
//  .bypassPolicyLockoutSafetyCheck(IResolvable)
//  .deletionWindowInDays(java.lang.Number)
//  .description(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .keyMaterialBase64(java.lang.String)
//  .multiRegion(java.lang.Boolean)
//  .multiRegion(IResolvable)
//  .policy(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .validTo(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.bypassPolicyLockoutSafetyCheck">bypassPolicyLockoutSafetyCheck</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#bypass_policy_lockout_safety_check KmsExternalKey#bypass_policy_lockout_safety_check}. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.deletionWindowInDays">deletionWindowInDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#deletion_window_in_days KmsExternalKey#deletion_window_in_days}. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#description KmsExternalKey#description}. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#enabled KmsExternalKey#enabled}. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#id KmsExternalKey#id}. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.keyMaterialBase64">keyMaterialBase64</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#key_material_base64 KmsExternalKey#key_material_base64}. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.multiRegion">multiRegion</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#multi_region KmsExternalKey#multi_region}. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.policy">policy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#policy KmsExternalKey#policy}. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#tags KmsExternalKey#tags}. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#tags_all KmsExternalKey#tags_all}. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.validTo">validTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#valid_to KmsExternalKey#valid_to}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bypassPolicyLockoutSafetyCheck`<sup>Optional</sup> <a name="bypassPolicyLockoutSafetyCheck" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.bypassPolicyLockoutSafetyCheck"></a>

```java
public java.lang.Object getBypassPolicyLockoutSafetyCheck();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#bypass_policy_lockout_safety_check KmsExternalKey#bypass_policy_lockout_safety_check}.

---

##### `deletionWindowInDays`<sup>Optional</sup> <a name="deletionWindowInDays" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.deletionWindowInDays"></a>

```java
public java.lang.Number getDeletionWindowInDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#deletion_window_in_days KmsExternalKey#deletion_window_in_days}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#description KmsExternalKey#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#enabled KmsExternalKey#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#id KmsExternalKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyMaterialBase64`<sup>Optional</sup> <a name="keyMaterialBase64" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.keyMaterialBase64"></a>

```java
public java.lang.String getKeyMaterialBase64();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#key_material_base64 KmsExternalKey#key_material_base64}.

---

##### `multiRegion`<sup>Optional</sup> <a name="multiRegion" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.multiRegion"></a>

```java
public java.lang.Object getMultiRegion();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#multi_region KmsExternalKey#multi_region}.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#policy KmsExternalKey#policy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#tags KmsExternalKey#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#tags_all KmsExternalKey#tags_all}.

---

##### `validTo`<sup>Optional</sup> <a name="validTo" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.validTo"></a>

```java
public java.lang.String getValidTo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#valid_to KmsExternalKey#valid_to}.

---



