# `s3BucketIntelligentTieringConfiguration` Submodule <a name="`s3BucketIntelligentTieringConfiguration` Submodule" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3BucketIntelligentTieringConfiguration <a name="S3BucketIntelligentTieringConfiguration" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration aws_s3_bucket_intelligent_tiering_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_intelligent_tiering_configuration.S3BucketIntelligentTieringConfiguration;

S3BucketIntelligentTieringConfiguration.Builder.create(Construct scope, java.lang.String id)
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
    .bucket(java.lang.String)
    .name(java.lang.String)
    .tiering(IResolvable)
    .tiering(java.util.List<S3BucketIntelligentTieringConfigurationTiering>)
//  .filter(S3BucketIntelligentTieringConfigurationFilter)
//  .id(java.lang.String)
//  .status(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#bucket S3BucketIntelligentTieringConfiguration#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#name S3BucketIntelligentTieringConfiguration#name}. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.tiering">tiering</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTiering">S3BucketIntelligentTieringConfigurationTiering</a>></code> | tiering block. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilter">S3BucketIntelligentTieringConfigurationFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#id S3BucketIntelligentTieringConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#status S3BucketIntelligentTieringConfiguration#status}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.bucket"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#bucket S3BucketIntelligentTieringConfiguration#bucket}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#name S3BucketIntelligentTieringConfiguration#name}.

---

##### `tiering`<sup>Required</sup> <a name="tiering" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.tiering"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTiering">S3BucketIntelligentTieringConfigurationTiering</a>>

tiering block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#tiering S3BucketIntelligentTieringConfiguration#tiering}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilter">S3BucketIntelligentTieringConfigurationFilter</a>

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#filter S3BucketIntelligentTieringConfiguration#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#id S3BucketIntelligentTieringConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#status S3BucketIntelligentTieringConfiguration#status}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.putTiering">putTiering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.putFilter"></a>

```java
public void putFilter(S3BucketIntelligentTieringConfigurationFilter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilter">S3BucketIntelligentTieringConfigurationFilter</a>

---

##### `putTiering` <a name="putTiering" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.putTiering"></a>

```java
public void putTiering(IResolvable OR java.util.List<S3BucketIntelligentTieringConfigurationTiering> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.putTiering.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTiering">S3BucketIntelligentTieringConfigurationTiering</a>>

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.resetId"></a>

```java
public void resetId()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.resetStatus"></a>

```java
public void resetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_intelligent_tiering_configuration.S3BucketIntelligentTieringConfiguration;

S3BucketIntelligentTieringConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_intelligent_tiering_configuration.S3BucketIntelligentTieringConfiguration;

S3BucketIntelligentTieringConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_intelligent_tiering_configuration.S3BucketIntelligentTieringConfiguration;

S3BucketIntelligentTieringConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference">S3BucketIntelligentTieringConfigurationFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.tiering">tiering</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList">S3BucketIntelligentTieringConfigurationTieringList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.filterInput">filterInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilter">S3BucketIntelligentTieringConfigurationFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.tieringInput">tieringInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTiering">S3BucketIntelligentTieringConfigurationTiering</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.filter"></a>

```java
public S3BucketIntelligentTieringConfigurationFilterOutputReference getFilter();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference">S3BucketIntelligentTieringConfigurationFilterOutputReference</a>

---

##### `tiering`<sup>Required</sup> <a name="tiering" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.tiering"></a>

```java
public S3BucketIntelligentTieringConfigurationTieringList getTiering();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList">S3BucketIntelligentTieringConfigurationTieringList</a>

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.filterInput"></a>

```java
public S3BucketIntelligentTieringConfigurationFilter getFilterInput();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilter">S3BucketIntelligentTieringConfigurationFilter</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `tieringInput`<sup>Optional</sup> <a name="tieringInput" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.tieringInput"></a>

```java
public java.lang.Object getTieringInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTiering">S3BucketIntelligentTieringConfigurationTiering</a>>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### S3BucketIntelligentTieringConfigurationConfig <a name="S3BucketIntelligentTieringConfigurationConfig" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_intelligent_tiering_configuration.S3BucketIntelligentTieringConfigurationConfig;

S3BucketIntelligentTieringConfigurationConfig.builder()
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
    .bucket(java.lang.String)
    .name(java.lang.String)
    .tiering(IResolvable)
    .tiering(java.util.List<S3BucketIntelligentTieringConfigurationTiering>)
//  .filter(S3BucketIntelligentTieringConfigurationFilter)
//  .id(java.lang.String)
//  .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#bucket S3BucketIntelligentTieringConfiguration#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#name S3BucketIntelligentTieringConfiguration#name}. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.tiering">tiering</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTiering">S3BucketIntelligentTieringConfigurationTiering</a>></code> | tiering block. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilter">S3BucketIntelligentTieringConfigurationFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#id S3BucketIntelligentTieringConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#status S3BucketIntelligentTieringConfiguration#status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#bucket S3BucketIntelligentTieringConfiguration#bucket}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#name S3BucketIntelligentTieringConfiguration#name}.

---

##### `tiering`<sup>Required</sup> <a name="tiering" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.tiering"></a>

```java
public java.lang.Object getTiering();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTiering">S3BucketIntelligentTieringConfigurationTiering</a>>

tiering block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#tiering S3BucketIntelligentTieringConfiguration#tiering}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.filter"></a>

```java
public S3BucketIntelligentTieringConfigurationFilter getFilter();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilter">S3BucketIntelligentTieringConfigurationFilter</a>

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#filter S3BucketIntelligentTieringConfiguration#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#id S3BucketIntelligentTieringConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#status S3BucketIntelligentTieringConfiguration#status}.

---

### S3BucketIntelligentTieringConfigurationFilter <a name="S3BucketIntelligentTieringConfigurationFilter" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_intelligent_tiering_configuration.S3BucketIntelligentTieringConfigurationFilter;

S3BucketIntelligentTieringConfigurationFilter.builder()
//  .prefix(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilter.property.prefix">prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#prefix S3BucketIntelligentTieringConfiguration#prefix}. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilter.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#tags S3BucketIntelligentTieringConfiguration#tags}. |

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilter.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#prefix S3BucketIntelligentTieringConfiguration#prefix}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilter.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#tags S3BucketIntelligentTieringConfiguration#tags}.

---

### S3BucketIntelligentTieringConfigurationTiering <a name="S3BucketIntelligentTieringConfigurationTiering" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTiering"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTiering.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_intelligent_tiering_configuration.S3BucketIntelligentTieringConfigurationTiering;

S3BucketIntelligentTieringConfigurationTiering.builder()
    .accessTier(java.lang.String)
    .days(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTiering.property.accessTier">accessTier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#access_tier S3BucketIntelligentTieringConfiguration#access_tier}. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTiering.property.days">days</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#days S3BucketIntelligentTieringConfiguration#days}. |

---

##### `accessTier`<sup>Required</sup> <a name="accessTier" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTiering.property.accessTier"></a>

```java
public java.lang.String getAccessTier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#access_tier S3BucketIntelligentTieringConfiguration#access_tier}.

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTiering.property.days"></a>

```java
public java.lang.Number getDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#days S3BucketIntelligentTieringConfiguration#days}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3BucketIntelligentTieringConfigurationFilterOutputReference <a name="S3BucketIntelligentTieringConfigurationFilterOutputReference" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_intelligent_tiering_configuration.S3BucketIntelligentTieringConfigurationFilterOutputReference;

new S3BucketIntelligentTieringConfigurationFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.resetTags"></a>

```java
public void resetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilter">S3BucketIntelligentTieringConfigurationFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.property.internalValue"></a>

```java
public S3BucketIntelligentTieringConfigurationFilter getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilter">S3BucketIntelligentTieringConfigurationFilter</a>

---


### S3BucketIntelligentTieringConfigurationTieringList <a name="S3BucketIntelligentTieringConfigurationTieringList" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_intelligent_tiering_configuration.S3BucketIntelligentTieringConfigurationTieringList;

new S3BucketIntelligentTieringConfigurationTieringList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.get"></a>

```java
public S3BucketIntelligentTieringConfigurationTieringOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTiering">S3BucketIntelligentTieringConfigurationTiering</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTiering">S3BucketIntelligentTieringConfigurationTiering</a>>

---


### S3BucketIntelligentTieringConfigurationTieringOutputReference <a name="S3BucketIntelligentTieringConfigurationTieringOutputReference" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_intelligent_tiering_configuration.S3BucketIntelligentTieringConfigurationTieringOutputReference;

new S3BucketIntelligentTieringConfigurationTieringOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.property.accessTierInput">accessTierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.property.daysInput">daysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.property.accessTier">accessTier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.property.days">days</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTiering">S3BucketIntelligentTieringConfigurationTiering</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessTierInput`<sup>Optional</sup> <a name="accessTierInput" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.property.accessTierInput"></a>

```java
public java.lang.String getAccessTierInput();
```

- *Type:* java.lang.String

---

##### `daysInput`<sup>Optional</sup> <a name="daysInput" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.property.daysInput"></a>

```java
public java.lang.Number getDaysInput();
```

- *Type:* java.lang.Number

---

##### `accessTier`<sup>Required</sup> <a name="accessTier" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.property.accessTier"></a>

```java
public java.lang.String getAccessTier();
```

- *Type:* java.lang.String

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.property.days"></a>

```java
public java.lang.Number getDays();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTiering">S3BucketIntelligentTieringConfigurationTiering</a> OR com.hashicorp.cdktf.IResolvable

---



