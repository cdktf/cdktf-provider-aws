# `macieS3BucketAssociation` Submodule <a name="`macieS3BucketAssociation` Submodule" id="@cdktf/provider-aws.macieS3BucketAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MacieS3BucketAssociation <a name="MacieS3BucketAssociation" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association aws_macie_s3_bucket_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.macie_s3_bucket_association.MacieS3BucketAssociation;

MacieS3BucketAssociation.Builder.create(Construct scope, java.lang.String id)
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
    .bucketName(java.lang.String)
//  .classificationType(MacieS3BucketAssociationClassificationType)
//  .id(java.lang.String)
//  .memberAccountId(java.lang.String)
//  .prefix(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.Initializer.parameter.bucketName">bucketName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#bucket_name MacieS3BucketAssociation#bucket_name}. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.Initializer.parameter.classificationType">classificationType</a></code> | <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationType">MacieS3BucketAssociationClassificationType</a></code> | classification_type block. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#id MacieS3BucketAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.Initializer.parameter.memberAccountId">memberAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#member_account_id MacieS3BucketAssociation#member_account_id}. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.Initializer.parameter.prefix">prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#prefix MacieS3BucketAssociation#prefix}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.Initializer.parameter.bucketName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#bucket_name MacieS3BucketAssociation#bucket_name}.

---

##### `classificationType`<sup>Optional</sup> <a name="classificationType" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.Initializer.parameter.classificationType"></a>

- *Type:* <a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationType">MacieS3BucketAssociationClassificationType</a>

classification_type block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#classification_type MacieS3BucketAssociation#classification_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#id MacieS3BucketAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `memberAccountId`<sup>Optional</sup> <a name="memberAccountId" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.Initializer.parameter.memberAccountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#member_account_id MacieS3BucketAssociation#member_account_id}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.Initializer.parameter.prefix"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#prefix MacieS3BucketAssociation#prefix}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.putClassificationType">putClassificationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.resetClassificationType">resetClassificationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.resetMemberAccountId">resetMemberAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putClassificationType` <a name="putClassificationType" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.putClassificationType"></a>

```java
public void putClassificationType(MacieS3BucketAssociationClassificationType value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.putClassificationType.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationType">MacieS3BucketAssociationClassificationType</a>

---

##### `resetClassificationType` <a name="resetClassificationType" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.resetClassificationType"></a>

```java
public void resetClassificationType()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.resetId"></a>

```java
public void resetId()
```

##### `resetMemberAccountId` <a name="resetMemberAccountId" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.resetMemberAccountId"></a>

```java
public void resetMemberAccountId()
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.resetPrefix"></a>

```java
public void resetPrefix()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.macie_s3_bucket_association.MacieS3BucketAssociation;

MacieS3BucketAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.macie_s3_bucket_association.MacieS3BucketAssociation;

MacieS3BucketAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.macie_s3_bucket_association.MacieS3BucketAssociation;

MacieS3BucketAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.classificationType">classificationType</a></code> | <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference">MacieS3BucketAssociationClassificationTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.bucketNameInput">bucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.classificationTypeInput">classificationTypeInput</a></code> | <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationType">MacieS3BucketAssociationClassificationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.memberAccountIdInput">memberAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.memberAccountId">memberAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `classificationType`<sup>Required</sup> <a name="classificationType" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.classificationType"></a>

```java
public MacieS3BucketAssociationClassificationTypeOutputReference getClassificationType();
```

- *Type:* <a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference">MacieS3BucketAssociationClassificationTypeOutputReference</a>

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.bucketNameInput"></a>

```java
public java.lang.String getBucketNameInput();
```

- *Type:* java.lang.String

---

##### `classificationTypeInput`<sup>Optional</sup> <a name="classificationTypeInput" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.classificationTypeInput"></a>

```java
public MacieS3BucketAssociationClassificationType getClassificationTypeInput();
```

- *Type:* <a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationType">MacieS3BucketAssociationClassificationType</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `memberAccountIdInput`<sup>Optional</sup> <a name="memberAccountIdInput" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.memberAccountIdInput"></a>

```java
public java.lang.String getMemberAccountIdInput();
```

- *Type:* java.lang.String

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `memberAccountId`<sup>Required</sup> <a name="memberAccountId" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.memberAccountId"></a>

```java
public java.lang.String getMemberAccountId();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MacieS3BucketAssociationClassificationType <a name="MacieS3BucketAssociationClassificationType" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationType.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.macie_s3_bucket_association.MacieS3BucketAssociationClassificationType;

MacieS3BucketAssociationClassificationType.builder()
//  .continuous(java.lang.String)
//  .oneTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationType.property.continuous">continuous</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#continuous MacieS3BucketAssociation#continuous}. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationType.property.oneTime">oneTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#one_time MacieS3BucketAssociation#one_time}. |

---

##### `continuous`<sup>Optional</sup> <a name="continuous" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationType.property.continuous"></a>

```java
public java.lang.String getContinuous();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#continuous MacieS3BucketAssociation#continuous}.

---

##### `oneTime`<sup>Optional</sup> <a name="oneTime" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationType.property.oneTime"></a>

```java
public java.lang.String getOneTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#one_time MacieS3BucketAssociation#one_time}.

---

### MacieS3BucketAssociationConfig <a name="MacieS3BucketAssociationConfig" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.macie_s3_bucket_association.MacieS3BucketAssociationConfig;

MacieS3BucketAssociationConfig.builder()
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
    .bucketName(java.lang.String)
//  .classificationType(MacieS3BucketAssociationClassificationType)
//  .id(java.lang.String)
//  .memberAccountId(java.lang.String)
//  .prefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#bucket_name MacieS3BucketAssociation#bucket_name}. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.classificationType">classificationType</a></code> | <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationType">MacieS3BucketAssociationClassificationType</a></code> | classification_type block. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#id MacieS3BucketAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.memberAccountId">memberAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#member_account_id MacieS3BucketAssociation#member_account_id}. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.prefix">prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#prefix MacieS3BucketAssociation#prefix}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#bucket_name MacieS3BucketAssociation#bucket_name}.

---

##### `classificationType`<sup>Optional</sup> <a name="classificationType" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.classificationType"></a>

```java
public MacieS3BucketAssociationClassificationType getClassificationType();
```

- *Type:* <a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationType">MacieS3BucketAssociationClassificationType</a>

classification_type block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#classification_type MacieS3BucketAssociation#classification_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#id MacieS3BucketAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `memberAccountId`<sup>Optional</sup> <a name="memberAccountId" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.memberAccountId"></a>

```java
public java.lang.String getMemberAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#member_account_id MacieS3BucketAssociation#member_account_id}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#prefix MacieS3BucketAssociation#prefix}.

---

## Classes <a name="Classes" id="Classes"></a>

### MacieS3BucketAssociationClassificationTypeOutputReference <a name="MacieS3BucketAssociationClassificationTypeOutputReference" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.macie_s3_bucket_association.MacieS3BucketAssociationClassificationTypeOutputReference;

new MacieS3BucketAssociationClassificationTypeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.resetContinuous">resetContinuous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.resetOneTime">resetOneTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContinuous` <a name="resetContinuous" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.resetContinuous"></a>

```java
public void resetContinuous()
```

##### `resetOneTime` <a name="resetOneTime" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.resetOneTime"></a>

```java
public void resetOneTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.property.continuousInput">continuousInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.property.oneTimeInput">oneTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.property.continuous">continuous</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.property.oneTime">oneTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationType">MacieS3BucketAssociationClassificationType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `continuousInput`<sup>Optional</sup> <a name="continuousInput" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.property.continuousInput"></a>

```java
public java.lang.String getContinuousInput();
```

- *Type:* java.lang.String

---

##### `oneTimeInput`<sup>Optional</sup> <a name="oneTimeInput" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.property.oneTimeInput"></a>

```java
public java.lang.String getOneTimeInput();
```

- *Type:* java.lang.String

---

##### `continuous`<sup>Required</sup> <a name="continuous" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.property.continuous"></a>

```java
public java.lang.String getContinuous();
```

- *Type:* java.lang.String

---

##### `oneTime`<sup>Required</sup> <a name="oneTime" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.property.oneTime"></a>

```java
public java.lang.String getOneTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.property.internalValue"></a>

```java
public MacieS3BucketAssociationClassificationType getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationType">MacieS3BucketAssociationClassificationType</a>

---



