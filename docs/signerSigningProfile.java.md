# `signerSigningProfile` Submodule <a name="`signerSigningProfile` Submodule" id="@cdktf/provider-aws.signerSigningProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SignerSigningProfile <a name="SignerSigningProfile" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile aws_signer_signing_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.signer_signing_profile.SignerSigningProfile;

SignerSigningProfile.Builder.create(Construct scope, java.lang.String id)
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
    .platformId(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .namePrefix(java.lang.String)
//  .signatureValidityPeriod(SignerSigningProfileSignatureValidityPeriod)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.platformId">platformId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#platform_id SignerSigningProfile#platform_id}. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#id SignerSigningProfile#id}. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#name SignerSigningProfile#name}. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#name_prefix SignerSigningProfile#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.signatureValidityPeriod">signatureValidityPeriod</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriod">SignerSigningProfileSignatureValidityPeriod</a></code> | signature_validity_period block. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#tags SignerSigningProfile#tags}. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#tags_all SignerSigningProfile#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `platformId`<sup>Required</sup> <a name="platformId" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.platformId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#platform_id SignerSigningProfile#platform_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#id SignerSigningProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#name SignerSigningProfile#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.namePrefix"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#name_prefix SignerSigningProfile#name_prefix}.

---

##### `signatureValidityPeriod`<sup>Optional</sup> <a name="signatureValidityPeriod" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.signatureValidityPeriod"></a>

- *Type:* <a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriod">SignerSigningProfileSignatureValidityPeriod</a>

signature_validity_period block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#signature_validity_period SignerSigningProfile#signature_validity_period}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#tags SignerSigningProfile#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#tags_all SignerSigningProfile#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.putSignatureValidityPeriod">putSignatureValidityPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.resetSignatureValidityPeriod">resetSignatureValidityPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putSignatureValidityPeriod` <a name="putSignatureValidityPeriod" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.putSignatureValidityPeriod"></a>

```java
public void putSignatureValidityPeriod(SignerSigningProfileSignatureValidityPeriod value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.putSignatureValidityPeriod.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriod">SignerSigningProfileSignatureValidityPeriod</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.resetName"></a>

```java
public void resetName()
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.resetNamePrefix"></a>

```java
public void resetNamePrefix()
```

##### `resetSignatureValidityPeriod` <a name="resetSignatureValidityPeriod" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.resetSignatureValidityPeriod"></a>

```java
public void resetSignatureValidityPeriod()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.signer_signing_profile.SignerSigningProfile;

SignerSigningProfile.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.signer_signing_profile.SignerSigningProfile;

SignerSigningProfile.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.signer_signing_profile.SignerSigningProfile;

SignerSigningProfile.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.platformDisplayName">platformDisplayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.revocationRecord">revocationRecord</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList">SignerSigningProfileRevocationRecordList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.signatureValidityPeriod">signatureValidityPeriod</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference">SignerSigningProfileSignatureValidityPeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.versionArn">versionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.namePrefixInput">namePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.platformIdInput">platformIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.signatureValidityPeriodInput">signatureValidityPeriodInput</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriod">SignerSigningProfileSignatureValidityPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.platformId">platformId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `platformDisplayName`<sup>Required</sup> <a name="platformDisplayName" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.platformDisplayName"></a>

```java
public java.lang.String getPlatformDisplayName();
```

- *Type:* java.lang.String

---

##### `revocationRecord`<sup>Required</sup> <a name="revocationRecord" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.revocationRecord"></a>

```java
public SignerSigningProfileRevocationRecordList getRevocationRecord();
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList">SignerSigningProfileRevocationRecordList</a>

---

##### `signatureValidityPeriod`<sup>Required</sup> <a name="signatureValidityPeriod" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.signatureValidityPeriod"></a>

```java
public SignerSigningProfileSignatureValidityPeriodOutputReference getSignatureValidityPeriod();
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference">SignerSigningProfileSignatureValidityPeriodOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `versionArn`<sup>Required</sup> <a name="versionArn" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.versionArn"></a>

```java
public java.lang.String getVersionArn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.namePrefixInput"></a>

```java
public java.lang.String getNamePrefixInput();
```

- *Type:* java.lang.String

---

##### `platformIdInput`<sup>Optional</sup> <a name="platformIdInput" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.platformIdInput"></a>

```java
public java.lang.String getPlatformIdInput();
```

- *Type:* java.lang.String

---

##### `signatureValidityPeriodInput`<sup>Optional</sup> <a name="signatureValidityPeriodInput" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.signatureValidityPeriodInput"></a>

```java
public SignerSigningProfileSignatureValidityPeriod getSignatureValidityPeriodInput();
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriod">SignerSigningProfileSignatureValidityPeriod</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.namePrefix"></a>

```java
public java.lang.String getNamePrefix();
```

- *Type:* java.lang.String

---

##### `platformId`<sup>Required</sup> <a name="platformId" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.platformId"></a>

```java
public java.lang.String getPlatformId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SignerSigningProfileConfig <a name="SignerSigningProfileConfig" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.signer_signing_profile.SignerSigningProfileConfig;

SignerSigningProfileConfig.builder()
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
    .platformId(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .namePrefix(java.lang.String)
//  .signatureValidityPeriod(SignerSigningProfileSignatureValidityPeriod)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.platformId">platformId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#platform_id SignerSigningProfile#platform_id}. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#id SignerSigningProfile#id}. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#name SignerSigningProfile#name}. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#name_prefix SignerSigningProfile#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.signatureValidityPeriod">signatureValidityPeriod</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriod">SignerSigningProfileSignatureValidityPeriod</a></code> | signature_validity_period block. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#tags SignerSigningProfile#tags}. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#tags_all SignerSigningProfile#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `platformId`<sup>Required</sup> <a name="platformId" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.platformId"></a>

```java
public java.lang.String getPlatformId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#platform_id SignerSigningProfile#platform_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#id SignerSigningProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#name SignerSigningProfile#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.namePrefix"></a>

```java
public java.lang.String getNamePrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#name_prefix SignerSigningProfile#name_prefix}.

---

##### `signatureValidityPeriod`<sup>Optional</sup> <a name="signatureValidityPeriod" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.signatureValidityPeriod"></a>

```java
public SignerSigningProfileSignatureValidityPeriod getSignatureValidityPeriod();
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriod">SignerSigningProfileSignatureValidityPeriod</a>

signature_validity_period block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#signature_validity_period SignerSigningProfile#signature_validity_period}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#tags SignerSigningProfile#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#tags_all SignerSigningProfile#tags_all}.

---

### SignerSigningProfileRevocationRecord <a name="SignerSigningProfileRevocationRecord" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecord"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecord.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.signer_signing_profile.SignerSigningProfileRevocationRecord;

SignerSigningProfileRevocationRecord.builder()
    .build();
```


### SignerSigningProfileSignatureValidityPeriod <a name="SignerSigningProfileSignatureValidityPeriod" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriod.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.signer_signing_profile.SignerSigningProfileSignatureValidityPeriod;

SignerSigningProfileSignatureValidityPeriod.builder()
    .type(java.lang.String)
    .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriod.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#type SignerSigningProfile#type}. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriod.property.value">value</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#value SignerSigningProfile#value}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriod.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#type SignerSigningProfile#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriod.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#value SignerSigningProfile#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### SignerSigningProfileRevocationRecordList <a name="SignerSigningProfileRevocationRecordList" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.signer_signing_profile.SignerSigningProfileRevocationRecordList;

new SignerSigningProfileRevocationRecordList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.get"></a>

```java
public SignerSigningProfileRevocationRecordOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### SignerSigningProfileRevocationRecordOutputReference <a name="SignerSigningProfileRevocationRecordOutputReference" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.signer_signing_profile.SignerSigningProfileRevocationRecordOutputReference;

new SignerSigningProfileRevocationRecordOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.property.revocationEffectiveFrom">revocationEffectiveFrom</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.property.revokedAt">revokedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.property.revokedBy">revokedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecord">SignerSigningProfileRevocationRecord</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `revocationEffectiveFrom`<sup>Required</sup> <a name="revocationEffectiveFrom" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.property.revocationEffectiveFrom"></a>

```java
public java.lang.String getRevocationEffectiveFrom();
```

- *Type:* java.lang.String

---

##### `revokedAt`<sup>Required</sup> <a name="revokedAt" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.property.revokedAt"></a>

```java
public java.lang.String getRevokedAt();
```

- *Type:* java.lang.String

---

##### `revokedBy`<sup>Required</sup> <a name="revokedBy" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.property.revokedBy"></a>

```java
public java.lang.String getRevokedBy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.property.internalValue"></a>

```java
public SignerSigningProfileRevocationRecord getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecord">SignerSigningProfileRevocationRecord</a>

---


### SignerSigningProfileSignatureValidityPeriodOutputReference <a name="SignerSigningProfileSignatureValidityPeriodOutputReference" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.signer_signing_profile.SignerSigningProfileSignatureValidityPeriodOutputReference;

new SignerSigningProfileSignatureValidityPeriodOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriod">SignerSigningProfileSignatureValidityPeriod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.property.internalValue"></a>

```java
public SignerSigningProfileSignatureValidityPeriod getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriod">SignerSigningProfileSignatureValidityPeriod</a>

---



