# `athenaDatabase` Submodule <a name="`athenaDatabase` Submodule" id="@cdktf/provider-aws.athenaDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AthenaDatabase <a name="AthenaDatabase" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/athena_database aws_athena_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.athena_database.AthenaDatabase;

AthenaDatabase.Builder.create(Construct scope, java.lang.String id)
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
//  .aclConfiguration(AthenaDatabaseAclConfiguration)
//  .bucket(java.lang.String)
//  .comment(java.lang.String)
//  .encryptionConfiguration(AthenaDatabaseEncryptionConfiguration)
//  .expectedBucketOwner(java.lang.String)
//  .forceDestroy(java.lang.Boolean)
//  .forceDestroy(IResolvable)
//  .id(java.lang.String)
//  .properties(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_database#name AthenaDatabase#name}. |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.Initializer.parameter.aclConfiguration">aclConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfiguration">AthenaDatabaseAclConfiguration</a></code> | acl_configuration block. |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.Initializer.parameter.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_database#bucket AthenaDatabase#bucket}. |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_database#comment AthenaDatabase#comment}. |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.Initializer.parameter.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfiguration">AthenaDatabaseEncryptionConfiguration</a></code> | encryption_configuration block. |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.Initializer.parameter.expectedBucketOwner">expectedBucketOwner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_database#expected_bucket_owner AthenaDatabase#expected_bucket_owner}. |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.Initializer.parameter.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_database#force_destroy AthenaDatabase#force_destroy}. |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_database#id AthenaDatabase#id}. |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.Initializer.parameter.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_database#properties AthenaDatabase#properties}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_database#name AthenaDatabase#name}.

---

##### `aclConfiguration`<sup>Optional</sup> <a name="aclConfiguration" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.Initializer.parameter.aclConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfiguration">AthenaDatabaseAclConfiguration</a>

acl_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_database#acl_configuration AthenaDatabase#acl_configuration}

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.Initializer.parameter.bucket"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_database#bucket AthenaDatabase#bucket}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_database#comment AthenaDatabase#comment}.

---

##### `encryptionConfiguration`<sup>Optional</sup> <a name="encryptionConfiguration" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.Initializer.parameter.encryptionConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfiguration">AthenaDatabaseEncryptionConfiguration</a>

encryption_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_database#encryption_configuration AthenaDatabase#encryption_configuration}

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="expectedBucketOwner" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.Initializer.parameter.expectedBucketOwner"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_database#expected_bucket_owner AthenaDatabase#expected_bucket_owner}.

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.Initializer.parameter.forceDestroy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_database#force_destroy AthenaDatabase#force_destroy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_database#id AthenaDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.Initializer.parameter.properties"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_database#properties AthenaDatabase#properties}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.putAclConfiguration">putAclConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.putEncryptionConfiguration">putEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.resetAclConfiguration">resetAclConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.resetEncryptionConfiguration">resetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.resetExpectedBucketOwner">resetExpectedBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.resetForceDestroy">resetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.resetProperties">resetProperties</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAclConfiguration` <a name="putAclConfiguration" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.putAclConfiguration"></a>

```java
public void putAclConfiguration(AthenaDatabaseAclConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.putAclConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfiguration">AthenaDatabaseAclConfiguration</a>

---

##### `putEncryptionConfiguration` <a name="putEncryptionConfiguration" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.putEncryptionConfiguration"></a>

```java
public void putEncryptionConfiguration(AthenaDatabaseEncryptionConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfiguration">AthenaDatabaseEncryptionConfiguration</a>

---

##### `resetAclConfiguration` <a name="resetAclConfiguration" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.resetAclConfiguration"></a>

```java
public void resetAclConfiguration()
```

##### `resetBucket` <a name="resetBucket" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.resetBucket"></a>

```java
public void resetBucket()
```

##### `resetComment` <a name="resetComment" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.resetComment"></a>

```java
public void resetComment()
```

##### `resetEncryptionConfiguration` <a name="resetEncryptionConfiguration" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.resetEncryptionConfiguration"></a>

```java
public void resetEncryptionConfiguration()
```

##### `resetExpectedBucketOwner` <a name="resetExpectedBucketOwner" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.resetExpectedBucketOwner"></a>

```java
public void resetExpectedBucketOwner()
```

##### `resetForceDestroy` <a name="resetForceDestroy" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.resetForceDestroy"></a>

```java
public void resetForceDestroy()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.resetId"></a>

```java
public void resetId()
```

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.resetProperties"></a>

```java
public void resetProperties()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.athena_database.AthenaDatabase;

AthenaDatabase.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.athena_database.AthenaDatabase;

AthenaDatabase.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.athena_database.AthenaDatabase;

AthenaDatabase.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.aclConfiguration">aclConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference">AthenaDatabaseAclConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference">AthenaDatabaseEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.aclConfigurationInput">aclConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfiguration">AthenaDatabaseAclConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.encryptionConfigurationInput">encryptionConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfiguration">AthenaDatabaseEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.expectedBucketOwnerInput">expectedBucketOwnerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.forceDestroyInput">forceDestroyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.propertiesInput">propertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `aclConfiguration`<sup>Required</sup> <a name="aclConfiguration" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.aclConfiguration"></a>

```java
public AthenaDatabaseAclConfigurationOutputReference getAclConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference">AthenaDatabaseAclConfigurationOutputReference</a>

---

##### `encryptionConfiguration`<sup>Required</sup> <a name="encryptionConfiguration" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.encryptionConfiguration"></a>

```java
public AthenaDatabaseEncryptionConfigurationOutputReference getEncryptionConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference">AthenaDatabaseEncryptionConfigurationOutputReference</a>

---

##### `aclConfigurationInput`<sup>Optional</sup> <a name="aclConfigurationInput" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.aclConfigurationInput"></a>

```java
public AthenaDatabaseAclConfiguration getAclConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfiguration">AthenaDatabaseAclConfiguration</a>

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `encryptionConfigurationInput`<sup>Optional</sup> <a name="encryptionConfigurationInput" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.encryptionConfigurationInput"></a>

```java
public AthenaDatabaseEncryptionConfiguration getEncryptionConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfiguration">AthenaDatabaseEncryptionConfiguration</a>

---

##### `expectedBucketOwnerInput`<sup>Optional</sup> <a name="expectedBucketOwnerInput" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.expectedBucketOwnerInput"></a>

```java
public java.lang.String getExpectedBucketOwnerInput();
```

- *Type:* java.lang.String

---

##### `forceDestroyInput`<sup>Optional</sup> <a name="forceDestroyInput" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.forceDestroyInput"></a>

```java
public java.lang.Object getForceDestroyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.propertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `expectedBucketOwner`<sup>Required</sup> <a name="expectedBucketOwner" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.expectedBucketOwner"></a>

```java
public java.lang.String getExpectedBucketOwner();
```

- *Type:* java.lang.String

---

##### `forceDestroy`<sup>Required</sup> <a name="forceDestroy" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.forceDestroy"></a>

```java
public java.lang.Object getForceDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabase.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AthenaDatabaseAclConfiguration <a name="AthenaDatabaseAclConfiguration" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.athena_database.AthenaDatabaseAclConfiguration;

AthenaDatabaseAclConfiguration.builder()
    .s3AclOption(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfiguration.property.s3AclOption">s3AclOption</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_database#s3_acl_option AthenaDatabase#s3_acl_option}. |

---

##### `s3AclOption`<sup>Required</sup> <a name="s3AclOption" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfiguration.property.s3AclOption"></a>

```java
public java.lang.String getS3AclOption();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_database#s3_acl_option AthenaDatabase#s3_acl_option}.

---

### AthenaDatabaseConfig <a name="AthenaDatabaseConfig" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.athena_database.AthenaDatabaseConfig;

AthenaDatabaseConfig.builder()
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
//  .aclConfiguration(AthenaDatabaseAclConfiguration)
//  .bucket(java.lang.String)
//  .comment(java.lang.String)
//  .encryptionConfiguration(AthenaDatabaseEncryptionConfiguration)
//  .expectedBucketOwner(java.lang.String)
//  .forceDestroy(java.lang.Boolean)
//  .forceDestroy(IResolvable)
//  .id(java.lang.String)
//  .properties(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_database#name AthenaDatabase#name}. |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.aclConfiguration">aclConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfiguration">AthenaDatabaseAclConfiguration</a></code> | acl_configuration block. |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_database#bucket AthenaDatabase#bucket}. |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_database#comment AthenaDatabase#comment}. |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfiguration">AthenaDatabaseEncryptionConfiguration</a></code> | encryption_configuration block. |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_database#expected_bucket_owner AthenaDatabase#expected_bucket_owner}. |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_database#force_destroy AthenaDatabase#force_destroy}. |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_database#id AthenaDatabase#id}. |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_database#properties AthenaDatabase#properties}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_database#name AthenaDatabase#name}.

---

##### `aclConfiguration`<sup>Optional</sup> <a name="aclConfiguration" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.aclConfiguration"></a>

```java
public AthenaDatabaseAclConfiguration getAclConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfiguration">AthenaDatabaseAclConfiguration</a>

acl_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_database#acl_configuration AthenaDatabase#acl_configuration}

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_database#bucket AthenaDatabase#bucket}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_database#comment AthenaDatabase#comment}.

---

##### `encryptionConfiguration`<sup>Optional</sup> <a name="encryptionConfiguration" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.encryptionConfiguration"></a>

```java
public AthenaDatabaseEncryptionConfiguration getEncryptionConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfiguration">AthenaDatabaseEncryptionConfiguration</a>

encryption_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_database#encryption_configuration AthenaDatabase#encryption_configuration}

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="expectedBucketOwner" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.expectedBucketOwner"></a>

```java
public java.lang.String getExpectedBucketOwner();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_database#expected_bucket_owner AthenaDatabase#expected_bucket_owner}.

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.forceDestroy"></a>

```java
public java.lang.Object getForceDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_database#force_destroy AthenaDatabase#force_destroy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_database#id AthenaDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_database#properties AthenaDatabase#properties}.

---

### AthenaDatabaseEncryptionConfiguration <a name="AthenaDatabaseEncryptionConfiguration" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.athena_database.AthenaDatabaseEncryptionConfiguration;

AthenaDatabaseEncryptionConfiguration.builder()
    .encryptionOption(java.lang.String)
//  .kmsKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfiguration.property.encryptionOption">encryptionOption</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_database#encryption_option AthenaDatabase#encryption_option}. |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfiguration.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_database#kms_key AthenaDatabase#kms_key}. |

---

##### `encryptionOption`<sup>Required</sup> <a name="encryptionOption" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfiguration.property.encryptionOption"></a>

```java
public java.lang.String getEncryptionOption();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_database#encryption_option AthenaDatabase#encryption_option}.

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfiguration.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_database#kms_key AthenaDatabase#kms_key}.

---

## Classes <a name="Classes" id="Classes"></a>

### AthenaDatabaseAclConfigurationOutputReference <a name="AthenaDatabaseAclConfigurationOutputReference" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.athena_database.AthenaDatabaseAclConfigurationOutputReference;

new AthenaDatabaseAclConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.property.s3AclOptionInput">s3AclOptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.property.s3AclOption">s3AclOption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfiguration">AthenaDatabaseAclConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3AclOptionInput`<sup>Optional</sup> <a name="s3AclOptionInput" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.property.s3AclOptionInput"></a>

```java
public java.lang.String getS3AclOptionInput();
```

- *Type:* java.lang.String

---

##### `s3AclOption`<sup>Required</sup> <a name="s3AclOption" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.property.s3AclOption"></a>

```java
public java.lang.String getS3AclOption();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.property.internalValue"></a>

```java
public AthenaDatabaseAclConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseAclConfiguration">AthenaDatabaseAclConfiguration</a>

---


### AthenaDatabaseEncryptionConfigurationOutputReference <a name="AthenaDatabaseEncryptionConfigurationOutputReference" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.athena_database.AthenaDatabaseEncryptionConfigurationOutputReference;

new AthenaDatabaseEncryptionConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.resetKmsKey">resetKmsKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.resetKmsKey"></a>

```java
public void resetKmsKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.property.encryptionOptionInput">encryptionOptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.property.encryptionOption">encryptionOption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfiguration">AthenaDatabaseEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryptionOptionInput`<sup>Optional</sup> <a name="encryptionOptionInput" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.property.encryptionOptionInput"></a>

```java
public java.lang.String getEncryptionOptionInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.property.kmsKeyInput"></a>

```java
public java.lang.String getKmsKeyInput();
```

- *Type:* java.lang.String

---

##### `encryptionOption`<sup>Required</sup> <a name="encryptionOption" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.property.encryptionOption"></a>

```java
public java.lang.String getEncryptionOption();
```

- *Type:* java.lang.String

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.property.internalValue"></a>

```java
public AthenaDatabaseEncryptionConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfiguration">AthenaDatabaseEncryptionConfiguration</a>

---



