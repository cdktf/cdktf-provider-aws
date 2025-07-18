# `datasyncLocationS3` Submodule <a name="`datasyncLocationS3` Submodule" id="@cdktf/provider-aws.datasyncLocationS3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatasyncLocationS3 <a name="DatasyncLocationS3" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_s3 aws_datasync_location_s3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datasync_location_s3.DatasyncLocationS3;

DatasyncLocationS3.Builder.create(Construct scope, java.lang.String id)
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
    .s3BucketArn(java.lang.String)
    .s3Config(DatasyncLocationS3S3Config)
    .subdirectory(java.lang.String)
//  .agentArns(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .s3StorageClass(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.s3BucketArn">s3BucketArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_s3#s3_bucket_arn DatasyncLocationS3#s3_bucket_arn}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.s3Config">s3Config</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3Config">DatasyncLocationS3S3Config</a></code> | s3_config block. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.subdirectory">subdirectory</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_s3#subdirectory DatasyncLocationS3#subdirectory}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.agentArns">agentArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_s3#agent_arns DatasyncLocationS3#agent_arns}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_s3#id DatasyncLocationS3#id}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.s3StorageClass">s3StorageClass</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_s3#s3_storage_class DatasyncLocationS3#s3_storage_class}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_s3#tags DatasyncLocationS3#tags}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_s3#tags_all DatasyncLocationS3#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `s3BucketArn`<sup>Required</sup> <a name="s3BucketArn" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.s3BucketArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_s3#s3_bucket_arn DatasyncLocationS3#s3_bucket_arn}.

---

##### `s3Config`<sup>Required</sup> <a name="s3Config" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.s3Config"></a>

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3Config">DatasyncLocationS3S3Config</a>

s3_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_s3#s3_config DatasyncLocationS3#s3_config}

---

##### `subdirectory`<sup>Required</sup> <a name="subdirectory" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.subdirectory"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_s3#subdirectory DatasyncLocationS3#subdirectory}.

---

##### `agentArns`<sup>Optional</sup> <a name="agentArns" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.agentArns"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_s3#agent_arns DatasyncLocationS3#agent_arns}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_s3#id DatasyncLocationS3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_s3#region DatasyncLocationS3#region}

---

##### `s3StorageClass`<sup>Optional</sup> <a name="s3StorageClass" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.s3StorageClass"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_s3#s3_storage_class DatasyncLocationS3#s3_storage_class}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_s3#tags DatasyncLocationS3#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_s3#tags_all DatasyncLocationS3#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.putS3Config">putS3Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.resetAgentArns">resetAgentArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.resetS3StorageClass">resetS3StorageClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putS3Config` <a name="putS3Config" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.putS3Config"></a>

```java
public void putS3Config(DatasyncLocationS3S3Config value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.putS3Config.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3Config">DatasyncLocationS3S3Config</a>

---

##### `resetAgentArns` <a name="resetAgentArns" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.resetAgentArns"></a>

```java
public void resetAgentArns()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.resetId"></a>

```java
public void resetId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetS3StorageClass` <a name="resetS3StorageClass" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.resetS3StorageClass"></a>

```java
public void resetS3StorageClass()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatasyncLocationS3 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.datasync_location_s3.DatasyncLocationS3;

DatasyncLocationS3.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.datasync_location_s3.DatasyncLocationS3;

DatasyncLocationS3.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.datasync_location_s3.DatasyncLocationS3;

DatasyncLocationS3.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.datasync_location_s3.DatasyncLocationS3;

DatasyncLocationS3.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatasyncLocationS3.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DatasyncLocationS3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatasyncLocationS3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatasyncLocationS3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_s3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DatasyncLocationS3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.s3Config">s3Config</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference">DatasyncLocationS3S3ConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.agentArnsInput">agentArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.s3BucketArnInput">s3BucketArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.s3ConfigInput">s3ConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3Config">DatasyncLocationS3S3Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.s3StorageClassInput">s3StorageClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.subdirectoryInput">subdirectoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.agentArns">agentArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.s3BucketArn">s3BucketArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.s3StorageClass">s3StorageClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.subdirectory">subdirectory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `s3Config`<sup>Required</sup> <a name="s3Config" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.s3Config"></a>

```java
public DatasyncLocationS3S3ConfigOutputReference getS3Config();
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference">DatasyncLocationS3S3ConfigOutputReference</a>

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `agentArnsInput`<sup>Optional</sup> <a name="agentArnsInput" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.agentArnsInput"></a>

```java
public java.util.List<java.lang.String> getAgentArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `s3BucketArnInput`<sup>Optional</sup> <a name="s3BucketArnInput" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.s3BucketArnInput"></a>

```java
public java.lang.String getS3BucketArnInput();
```

- *Type:* java.lang.String

---

##### `s3ConfigInput`<sup>Optional</sup> <a name="s3ConfigInput" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.s3ConfigInput"></a>

```java
public DatasyncLocationS3S3Config getS3ConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3Config">DatasyncLocationS3S3Config</a>

---

##### `s3StorageClassInput`<sup>Optional</sup> <a name="s3StorageClassInput" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.s3StorageClassInput"></a>

```java
public java.lang.String getS3StorageClassInput();
```

- *Type:* java.lang.String

---

##### `subdirectoryInput`<sup>Optional</sup> <a name="subdirectoryInput" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.subdirectoryInput"></a>

```java
public java.lang.String getSubdirectoryInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `agentArns`<sup>Required</sup> <a name="agentArns" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.agentArns"></a>

```java
public java.util.List<java.lang.String> getAgentArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `s3BucketArn`<sup>Required</sup> <a name="s3BucketArn" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.s3BucketArn"></a>

```java
public java.lang.String getS3BucketArn();
```

- *Type:* java.lang.String

---

##### `s3StorageClass`<sup>Required</sup> <a name="s3StorageClass" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.s3StorageClass"></a>

```java
public java.lang.String getS3StorageClass();
```

- *Type:* java.lang.String

---

##### `subdirectory`<sup>Required</sup> <a name="subdirectory" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.subdirectory"></a>

```java
public java.lang.String getSubdirectory();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatasyncLocationS3Config <a name="DatasyncLocationS3Config" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datasync_location_s3.DatasyncLocationS3Config;

DatasyncLocationS3Config.builder()
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
    .s3BucketArn(java.lang.String)
    .s3Config(DatasyncLocationS3S3Config)
    .subdirectory(java.lang.String)
//  .agentArns(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .s3StorageClass(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.property.s3BucketArn">s3BucketArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_s3#s3_bucket_arn DatasyncLocationS3#s3_bucket_arn}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.property.s3Config">s3Config</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3Config">DatasyncLocationS3S3Config</a></code> | s3_config block. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.property.subdirectory">subdirectory</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_s3#subdirectory DatasyncLocationS3#subdirectory}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.property.agentArns">agentArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_s3#agent_arns DatasyncLocationS3#agent_arns}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_s3#id DatasyncLocationS3#id}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.property.s3StorageClass">s3StorageClass</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_s3#s3_storage_class DatasyncLocationS3#s3_storage_class}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_s3#tags DatasyncLocationS3#tags}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_s3#tags_all DatasyncLocationS3#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `s3BucketArn`<sup>Required</sup> <a name="s3BucketArn" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.property.s3BucketArn"></a>

```java
public java.lang.String getS3BucketArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_s3#s3_bucket_arn DatasyncLocationS3#s3_bucket_arn}.

---

##### `s3Config`<sup>Required</sup> <a name="s3Config" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.property.s3Config"></a>

```java
public DatasyncLocationS3S3Config getS3Config();
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3Config">DatasyncLocationS3S3Config</a>

s3_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_s3#s3_config DatasyncLocationS3#s3_config}

---

##### `subdirectory`<sup>Required</sup> <a name="subdirectory" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.property.subdirectory"></a>

```java
public java.lang.String getSubdirectory();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_s3#subdirectory DatasyncLocationS3#subdirectory}.

---

##### `agentArns`<sup>Optional</sup> <a name="agentArns" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.property.agentArns"></a>

```java
public java.util.List<java.lang.String> getAgentArns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_s3#agent_arns DatasyncLocationS3#agent_arns}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_s3#id DatasyncLocationS3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_s3#region DatasyncLocationS3#region}

---

##### `s3StorageClass`<sup>Optional</sup> <a name="s3StorageClass" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.property.s3StorageClass"></a>

```java
public java.lang.String getS3StorageClass();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_s3#s3_storage_class DatasyncLocationS3#s3_storage_class}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_s3#tags DatasyncLocationS3#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_s3#tags_all DatasyncLocationS3#tags_all}.

---

### DatasyncLocationS3S3Config <a name="DatasyncLocationS3S3Config" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datasync_location_s3.DatasyncLocationS3S3Config;

DatasyncLocationS3S3Config.builder()
    .bucketAccessRoleArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3Config.property.bucketAccessRoleArn">bucketAccessRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_s3#bucket_access_role_arn DatasyncLocationS3#bucket_access_role_arn}. |

---

##### `bucketAccessRoleArn`<sup>Required</sup> <a name="bucketAccessRoleArn" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3Config.property.bucketAccessRoleArn"></a>

```java
public java.lang.String getBucketAccessRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_location_s3#bucket_access_role_arn DatasyncLocationS3#bucket_access_role_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatasyncLocationS3S3ConfigOutputReference <a name="DatasyncLocationS3S3ConfigOutputReference" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datasync_location_s3.DatasyncLocationS3S3ConfigOutputReference;

new DatasyncLocationS3S3ConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.property.bucketAccessRoleArnInput">bucketAccessRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.property.bucketAccessRoleArn">bucketAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3Config">DatasyncLocationS3S3Config</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketAccessRoleArnInput`<sup>Optional</sup> <a name="bucketAccessRoleArnInput" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.property.bucketAccessRoleArnInput"></a>

```java
public java.lang.String getBucketAccessRoleArnInput();
```

- *Type:* java.lang.String

---

##### `bucketAccessRoleArn`<sup>Required</sup> <a name="bucketAccessRoleArn" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.property.bucketAccessRoleArn"></a>

```java
public java.lang.String getBucketAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.property.internalValue"></a>

```java
public DatasyncLocationS3S3Config getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3Config">DatasyncLocationS3S3Config</a>

---



