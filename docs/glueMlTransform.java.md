# `glueMlTransform` Submodule <a name="`glueMlTransform` Submodule" id="@cdktf/provider-aws.glueMlTransform"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueMlTransform <a name="GlueMlTransform" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform aws_glue_ml_transform}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_ml_transform.GlueMlTransform;

GlueMlTransform.Builder.create(Construct scope, java.lang.String id)
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
    .inputRecordTables(IResolvable)
    .inputRecordTables(java.util.List<GlueMlTransformInputRecordTables>)
    .name(java.lang.String)
    .parameters(GlueMlTransformParameters)
    .roleArn(java.lang.String)
//  .description(java.lang.String)
//  .glueVersion(java.lang.String)
//  .id(java.lang.String)
//  .maxCapacity(java.lang.Number)
//  .maxRetries(java.lang.Number)
//  .numberOfWorkers(java.lang.Number)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeout(java.lang.Number)
//  .workerType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.inputRecordTables">inputRecordTables</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTables">GlueMlTransformInputRecordTables</a>></code> | input_record_tables block. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#name GlueMlTransform#name}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParameters">GlueMlTransformParameters</a></code> | parameters block. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#role_arn GlueMlTransform#role_arn}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#description GlueMlTransform#description}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.glueVersion">glueVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#glue_version GlueMlTransform#glue_version}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#id GlueMlTransform#id}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.maxCapacity">maxCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#max_capacity GlueMlTransform#max_capacity}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#max_retries GlueMlTransform#max_retries}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.numberOfWorkers">numberOfWorkers</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#number_of_workers GlueMlTransform#number_of_workers}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#tags GlueMlTransform#tags}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#tags_all GlueMlTransform#tags_all}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.timeout">timeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#timeout GlueMlTransform#timeout}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.workerType">workerType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#worker_type GlueMlTransform#worker_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `inputRecordTables`<sup>Required</sup> <a name="inputRecordTables" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.inputRecordTables"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTables">GlueMlTransformInputRecordTables</a>>

input_record_tables block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#input_record_tables GlueMlTransform#input_record_tables}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#name GlueMlTransform#name}.

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.parameters"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParameters">GlueMlTransformParameters</a>

parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#parameters GlueMlTransform#parameters}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#role_arn GlueMlTransform#role_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#description GlueMlTransform#description}.

---

##### `glueVersion`<sup>Optional</sup> <a name="glueVersion" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.glueVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#glue_version GlueMlTransform#glue_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#id GlueMlTransform#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxCapacity`<sup>Optional</sup> <a name="maxCapacity" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.maxCapacity"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#max_capacity GlueMlTransform#max_capacity}.

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.maxRetries"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#max_retries GlueMlTransform#max_retries}.

---

##### `numberOfWorkers`<sup>Optional</sup> <a name="numberOfWorkers" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.numberOfWorkers"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#number_of_workers GlueMlTransform#number_of_workers}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#tags GlueMlTransform#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#tags_all GlueMlTransform#tags_all}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.timeout"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#timeout GlueMlTransform#timeout}.

---

##### `workerType`<sup>Optional</sup> <a name="workerType" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.workerType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#worker_type GlueMlTransform#worker_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.putInputRecordTables">putInputRecordTables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetGlueVersion">resetGlueVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetMaxCapacity">resetMaxCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetMaxRetries">resetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetNumberOfWorkers">resetNumberOfWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetWorkerType">resetWorkerType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putInputRecordTables` <a name="putInputRecordTables" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.putInputRecordTables"></a>

```java
public void putInputRecordTables(IResolvable OR java.util.List<GlueMlTransformInputRecordTables> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.putInputRecordTables.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTables">GlueMlTransformInputRecordTables</a>>

---

##### `putParameters` <a name="putParameters" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.putParameters"></a>

```java
public void putParameters(GlueMlTransformParameters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.putParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParameters">GlueMlTransformParameters</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetGlueVersion` <a name="resetGlueVersion" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetGlueVersion"></a>

```java
public void resetGlueVersion()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetId"></a>

```java
public void resetId()
```

##### `resetMaxCapacity` <a name="resetMaxCapacity" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetMaxCapacity"></a>

```java
public void resetMaxCapacity()
```

##### `resetMaxRetries` <a name="resetMaxRetries" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetMaxRetries"></a>

```java
public void resetMaxRetries()
```

##### `resetNumberOfWorkers` <a name="resetNumberOfWorkers" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetNumberOfWorkers"></a>

```java
public void resetNumberOfWorkers()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetTimeout"></a>

```java
public void resetTimeout()
```

##### `resetWorkerType` <a name="resetWorkerType" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetWorkerType"></a>

```java
public void resetWorkerType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_ml_transform.GlueMlTransform;

GlueMlTransform.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_ml_transform.GlueMlTransform;

GlueMlTransform.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_ml_transform.GlueMlTransform;

GlueMlTransform.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.inputRecordTables">inputRecordTables</a></code> | <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList">GlueMlTransformInputRecordTablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.labelCount">labelCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference">GlueMlTransformParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.schema">schema</a></code> | <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList">GlueMlTransformSchemaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.glueVersionInput">glueVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.inputRecordTablesInput">inputRecordTablesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTables">GlueMlTransformInputRecordTables</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.maxCapacityInput">maxCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.maxRetriesInput">maxRetriesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.numberOfWorkersInput">numberOfWorkersInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.parametersInput">parametersInput</a></code> | <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParameters">GlueMlTransformParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.timeoutInput">timeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.workerTypeInput">workerTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.glueVersion">glueVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.maxCapacity">maxCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.numberOfWorkers">numberOfWorkers</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.workerType">workerType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `inputRecordTables`<sup>Required</sup> <a name="inputRecordTables" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.inputRecordTables"></a>

```java
public GlueMlTransformInputRecordTablesList getInputRecordTables();
```

- *Type:* <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList">GlueMlTransformInputRecordTablesList</a>

---

##### `labelCount`<sup>Required</sup> <a name="labelCount" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.labelCount"></a>

```java
public java.lang.Number getLabelCount();
```

- *Type:* java.lang.Number

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.parameters"></a>

```java
public GlueMlTransformParametersOutputReference getParameters();
```

- *Type:* <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference">GlueMlTransformParametersOutputReference</a>

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.schema"></a>

```java
public GlueMlTransformSchemaList getSchema();
```

- *Type:* <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList">GlueMlTransformSchemaList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `glueVersionInput`<sup>Optional</sup> <a name="glueVersionInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.glueVersionInput"></a>

```java
public java.lang.String getGlueVersionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `inputRecordTablesInput`<sup>Optional</sup> <a name="inputRecordTablesInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.inputRecordTablesInput"></a>

```java
public java.lang.Object getInputRecordTablesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTables">GlueMlTransformInputRecordTables</a>>

---

##### `maxCapacityInput`<sup>Optional</sup> <a name="maxCapacityInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.maxCapacityInput"></a>

```java
public java.lang.Number getMaxCapacityInput();
```

- *Type:* java.lang.Number

---

##### `maxRetriesInput`<sup>Optional</sup> <a name="maxRetriesInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.maxRetriesInput"></a>

```java
public java.lang.Number getMaxRetriesInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `numberOfWorkersInput`<sup>Optional</sup> <a name="numberOfWorkersInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.numberOfWorkersInput"></a>

```java
public java.lang.Number getNumberOfWorkersInput();
```

- *Type:* java.lang.Number

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.parametersInput"></a>

```java
public GlueMlTransformParameters getParametersInput();
```

- *Type:* <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParameters">GlueMlTransformParameters</a>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.timeoutInput"></a>

```java
public java.lang.Number getTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `workerTypeInput`<sup>Optional</sup> <a name="workerTypeInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.workerTypeInput"></a>

```java
public java.lang.String getWorkerTypeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `glueVersion`<sup>Required</sup> <a name="glueVersion" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.glueVersion"></a>

```java
public java.lang.String getGlueVersion();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.maxCapacity"></a>

```java
public java.lang.Number getMaxCapacity();
```

- *Type:* java.lang.Number

---

##### `maxRetries`<sup>Required</sup> <a name="maxRetries" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.maxRetries"></a>

```java
public java.lang.Number getMaxRetries();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `numberOfWorkers`<sup>Required</sup> <a name="numberOfWorkers" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.numberOfWorkers"></a>

```java
public java.lang.Number getNumberOfWorkers();
```

- *Type:* java.lang.Number

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

---

##### `workerType`<sup>Required</sup> <a name="workerType" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.workerType"></a>

```java
public java.lang.String getWorkerType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GlueMlTransformConfig <a name="GlueMlTransformConfig" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_ml_transform.GlueMlTransformConfig;

GlueMlTransformConfig.builder()
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
    .inputRecordTables(IResolvable)
    .inputRecordTables(java.util.List<GlueMlTransformInputRecordTables>)
    .name(java.lang.String)
    .parameters(GlueMlTransformParameters)
    .roleArn(java.lang.String)
//  .description(java.lang.String)
//  .glueVersion(java.lang.String)
//  .id(java.lang.String)
//  .maxCapacity(java.lang.Number)
//  .maxRetries(java.lang.Number)
//  .numberOfWorkers(java.lang.Number)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeout(java.lang.Number)
//  .workerType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.inputRecordTables">inputRecordTables</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTables">GlueMlTransformInputRecordTables</a>></code> | input_record_tables block. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#name GlueMlTransform#name}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParameters">GlueMlTransformParameters</a></code> | parameters block. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#role_arn GlueMlTransform#role_arn}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#description GlueMlTransform#description}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.glueVersion">glueVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#glue_version GlueMlTransform#glue_version}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#id GlueMlTransform#id}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.maxCapacity">maxCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#max_capacity GlueMlTransform#max_capacity}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#max_retries GlueMlTransform#max_retries}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.numberOfWorkers">numberOfWorkers</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#number_of_workers GlueMlTransform#number_of_workers}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#tags GlueMlTransform#tags}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#tags_all GlueMlTransform#tags_all}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#timeout GlueMlTransform#timeout}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.workerType">workerType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#worker_type GlueMlTransform#worker_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `inputRecordTables`<sup>Required</sup> <a name="inputRecordTables" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.inputRecordTables"></a>

```java
public java.lang.Object getInputRecordTables();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTables">GlueMlTransformInputRecordTables</a>>

input_record_tables block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#input_record_tables GlueMlTransform#input_record_tables}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#name GlueMlTransform#name}.

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.parameters"></a>

```java
public GlueMlTransformParameters getParameters();
```

- *Type:* <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParameters">GlueMlTransformParameters</a>

parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#parameters GlueMlTransform#parameters}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#role_arn GlueMlTransform#role_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#description GlueMlTransform#description}.

---

##### `glueVersion`<sup>Optional</sup> <a name="glueVersion" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.glueVersion"></a>

```java
public java.lang.String getGlueVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#glue_version GlueMlTransform#glue_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#id GlueMlTransform#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxCapacity`<sup>Optional</sup> <a name="maxCapacity" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.maxCapacity"></a>

```java
public java.lang.Number getMaxCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#max_capacity GlueMlTransform#max_capacity}.

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.maxRetries"></a>

```java
public java.lang.Number getMaxRetries();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#max_retries GlueMlTransform#max_retries}.

---

##### `numberOfWorkers`<sup>Optional</sup> <a name="numberOfWorkers" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.numberOfWorkers"></a>

```java
public java.lang.Number getNumberOfWorkers();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#number_of_workers GlueMlTransform#number_of_workers}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#tags GlueMlTransform#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#tags_all GlueMlTransform#tags_all}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#timeout GlueMlTransform#timeout}.

---

##### `workerType`<sup>Optional</sup> <a name="workerType" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.workerType"></a>

```java
public java.lang.String getWorkerType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#worker_type GlueMlTransform#worker_type}.

---

### GlueMlTransformInputRecordTables <a name="GlueMlTransformInputRecordTables" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTables.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_ml_transform.GlueMlTransformInputRecordTables;

GlueMlTransformInputRecordTables.builder()
    .databaseName(java.lang.String)
    .tableName(java.lang.String)
//  .catalogId(java.lang.String)
//  .connectionName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTables.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#database_name GlueMlTransform#database_name}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTables.property.tableName">tableName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#table_name GlueMlTransform#table_name}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTables.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#catalog_id GlueMlTransform#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTables.property.connectionName">connectionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#connection_name GlueMlTransform#connection_name}. |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTables.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#database_name GlueMlTransform#database_name}.

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTables.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#table_name GlueMlTransform#table_name}.

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTables.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#catalog_id GlueMlTransform#catalog_id}.

---

##### `connectionName`<sup>Optional</sup> <a name="connectionName" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTables.property.connectionName"></a>

```java
public java.lang.String getConnectionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#connection_name GlueMlTransform#connection_name}.

---

### GlueMlTransformParameters <a name="GlueMlTransformParameters" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParameters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_ml_transform.GlueMlTransformParameters;

GlueMlTransformParameters.builder()
    .findMatchesParameters(GlueMlTransformParametersFindMatchesParameters)
    .transformType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParameters.property.findMatchesParameters">findMatchesParameters</a></code> | <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters">GlueMlTransformParametersFindMatchesParameters</a></code> | find_matches_parameters block. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParameters.property.transformType">transformType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#transform_type GlueMlTransform#transform_type}. |

---

##### `findMatchesParameters`<sup>Required</sup> <a name="findMatchesParameters" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParameters.property.findMatchesParameters"></a>

```java
public GlueMlTransformParametersFindMatchesParameters getFindMatchesParameters();
```

- *Type:* <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters">GlueMlTransformParametersFindMatchesParameters</a>

find_matches_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#find_matches_parameters GlueMlTransform#find_matches_parameters}

---

##### `transformType`<sup>Required</sup> <a name="transformType" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParameters.property.transformType"></a>

```java
public java.lang.String getTransformType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#transform_type GlueMlTransform#transform_type}.

---

### GlueMlTransformParametersFindMatchesParameters <a name="GlueMlTransformParametersFindMatchesParameters" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_ml_transform.GlueMlTransformParametersFindMatchesParameters;

GlueMlTransformParametersFindMatchesParameters.builder()
//  .accuracyCostTradeOff(java.lang.Number)
//  .enforceProvidedLabels(java.lang.Boolean)
//  .enforceProvidedLabels(IResolvable)
//  .precisionRecallTradeOff(java.lang.Number)
//  .primaryKeyColumnName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters.property.accuracyCostTradeOff">accuracyCostTradeOff</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#accuracy_cost_trade_off GlueMlTransform#accuracy_cost_trade_off}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters.property.enforceProvidedLabels">enforceProvidedLabels</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#enforce_provided_labels GlueMlTransform#enforce_provided_labels}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters.property.precisionRecallTradeOff">precisionRecallTradeOff</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#precision_recall_trade_off GlueMlTransform#precision_recall_trade_off}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters.property.primaryKeyColumnName">primaryKeyColumnName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#primary_key_column_name GlueMlTransform#primary_key_column_name}. |

---

##### `accuracyCostTradeOff`<sup>Optional</sup> <a name="accuracyCostTradeOff" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters.property.accuracyCostTradeOff"></a>

```java
public java.lang.Number getAccuracyCostTradeOff();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#accuracy_cost_trade_off GlueMlTransform#accuracy_cost_trade_off}.

---

##### `enforceProvidedLabels`<sup>Optional</sup> <a name="enforceProvidedLabels" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters.property.enforceProvidedLabels"></a>

```java
public java.lang.Object getEnforceProvidedLabels();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#enforce_provided_labels GlueMlTransform#enforce_provided_labels}.

---

##### `precisionRecallTradeOff`<sup>Optional</sup> <a name="precisionRecallTradeOff" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters.property.precisionRecallTradeOff"></a>

```java
public java.lang.Number getPrecisionRecallTradeOff();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#precision_recall_trade_off GlueMlTransform#precision_recall_trade_off}.

---

##### `primaryKeyColumnName`<sup>Optional</sup> <a name="primaryKeyColumnName" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters.property.primaryKeyColumnName"></a>

```java
public java.lang.String getPrimaryKeyColumnName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#primary_key_column_name GlueMlTransform#primary_key_column_name}.

---

### GlueMlTransformSchema <a name="GlueMlTransformSchema" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchema"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchema.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_ml_transform.GlueMlTransformSchema;

GlueMlTransformSchema.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### GlueMlTransformInputRecordTablesList <a name="GlueMlTransformInputRecordTablesList" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_ml_transform.GlueMlTransformInputRecordTablesList;

new GlueMlTransformInputRecordTablesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.get"></a>

```java
public GlueMlTransformInputRecordTablesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTables">GlueMlTransformInputRecordTables</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTables">GlueMlTransformInputRecordTables</a>>

---


### GlueMlTransformInputRecordTablesOutputReference <a name="GlueMlTransformInputRecordTablesOutputReference" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_ml_transform.GlueMlTransformInputRecordTablesOutputReference;

new GlueMlTransformInputRecordTablesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.resetCatalogId">resetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.resetConnectionName">resetConnectionName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.resetCatalogId"></a>

```java
public void resetCatalogId()
```

##### `resetConnectionName` <a name="resetConnectionName" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.resetConnectionName"></a>

```java
public void resetConnectionName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.connectionNameInput">connectionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.connectionName">connectionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.tableName">tableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTables">GlueMlTransformInputRecordTables</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.catalogIdInput"></a>

```java
public java.lang.String getCatalogIdInput();
```

- *Type:* java.lang.String

---

##### `connectionNameInput`<sup>Optional</sup> <a name="connectionNameInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.connectionNameInput"></a>

```java
public java.lang.String getConnectionNameInput();
```

- *Type:* java.lang.String

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.tableNameInput"></a>

```java
public java.lang.String getTableNameInput();
```

- *Type:* java.lang.String

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.connectionName"></a>

```java
public java.lang.String getConnectionName();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTables">GlueMlTransformInputRecordTables</a> OR com.hashicorp.cdktf.IResolvable

---


### GlueMlTransformParametersFindMatchesParametersOutputReference <a name="GlueMlTransformParametersFindMatchesParametersOutputReference" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_ml_transform.GlueMlTransformParametersFindMatchesParametersOutputReference;

new GlueMlTransformParametersFindMatchesParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.resetAccuracyCostTradeOff">resetAccuracyCostTradeOff</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.resetEnforceProvidedLabels">resetEnforceProvidedLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.resetPrecisionRecallTradeOff">resetPrecisionRecallTradeOff</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.resetPrimaryKeyColumnName">resetPrimaryKeyColumnName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccuracyCostTradeOff` <a name="resetAccuracyCostTradeOff" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.resetAccuracyCostTradeOff"></a>

```java
public void resetAccuracyCostTradeOff()
```

##### `resetEnforceProvidedLabels` <a name="resetEnforceProvidedLabels" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.resetEnforceProvidedLabels"></a>

```java
public void resetEnforceProvidedLabels()
```

##### `resetPrecisionRecallTradeOff` <a name="resetPrecisionRecallTradeOff" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.resetPrecisionRecallTradeOff"></a>

```java
public void resetPrecisionRecallTradeOff()
```

##### `resetPrimaryKeyColumnName` <a name="resetPrimaryKeyColumnName" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.resetPrimaryKeyColumnName"></a>

```java
public void resetPrimaryKeyColumnName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.accuracyCostTradeOffInput">accuracyCostTradeOffInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.enforceProvidedLabelsInput">enforceProvidedLabelsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.precisionRecallTradeOffInput">precisionRecallTradeOffInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.primaryKeyColumnNameInput">primaryKeyColumnNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.accuracyCostTradeOff">accuracyCostTradeOff</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.enforceProvidedLabels">enforceProvidedLabels</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.precisionRecallTradeOff">precisionRecallTradeOff</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.primaryKeyColumnName">primaryKeyColumnName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters">GlueMlTransformParametersFindMatchesParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accuracyCostTradeOffInput`<sup>Optional</sup> <a name="accuracyCostTradeOffInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.accuracyCostTradeOffInput"></a>

```java
public java.lang.Number getAccuracyCostTradeOffInput();
```

- *Type:* java.lang.Number

---

##### `enforceProvidedLabelsInput`<sup>Optional</sup> <a name="enforceProvidedLabelsInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.enforceProvidedLabelsInput"></a>

```java
public java.lang.Object getEnforceProvidedLabelsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `precisionRecallTradeOffInput`<sup>Optional</sup> <a name="precisionRecallTradeOffInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.precisionRecallTradeOffInput"></a>

```java
public java.lang.Number getPrecisionRecallTradeOffInput();
```

- *Type:* java.lang.Number

---

##### `primaryKeyColumnNameInput`<sup>Optional</sup> <a name="primaryKeyColumnNameInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.primaryKeyColumnNameInput"></a>

```java
public java.lang.String getPrimaryKeyColumnNameInput();
```

- *Type:* java.lang.String

---

##### `accuracyCostTradeOff`<sup>Required</sup> <a name="accuracyCostTradeOff" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.accuracyCostTradeOff"></a>

```java
public java.lang.Number getAccuracyCostTradeOff();
```

- *Type:* java.lang.Number

---

##### `enforceProvidedLabels`<sup>Required</sup> <a name="enforceProvidedLabels" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.enforceProvidedLabels"></a>

```java
public java.lang.Object getEnforceProvidedLabels();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `precisionRecallTradeOff`<sup>Required</sup> <a name="precisionRecallTradeOff" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.precisionRecallTradeOff"></a>

```java
public java.lang.Number getPrecisionRecallTradeOff();
```

- *Type:* java.lang.Number

---

##### `primaryKeyColumnName`<sup>Required</sup> <a name="primaryKeyColumnName" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.primaryKeyColumnName"></a>

```java
public java.lang.String getPrimaryKeyColumnName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.internalValue"></a>

```java
public GlueMlTransformParametersFindMatchesParameters getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters">GlueMlTransformParametersFindMatchesParameters</a>

---


### GlueMlTransformParametersOutputReference <a name="GlueMlTransformParametersOutputReference" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_ml_transform.GlueMlTransformParametersOutputReference;

new GlueMlTransformParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.putFindMatchesParameters">putFindMatchesParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFindMatchesParameters` <a name="putFindMatchesParameters" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.putFindMatchesParameters"></a>

```java
public void putFindMatchesParameters(GlueMlTransformParametersFindMatchesParameters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.putFindMatchesParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters">GlueMlTransformParametersFindMatchesParameters</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.property.findMatchesParameters">findMatchesParameters</a></code> | <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference">GlueMlTransformParametersFindMatchesParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.property.findMatchesParametersInput">findMatchesParametersInput</a></code> | <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters">GlueMlTransformParametersFindMatchesParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.property.transformTypeInput">transformTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.property.transformType">transformType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParameters">GlueMlTransformParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `findMatchesParameters`<sup>Required</sup> <a name="findMatchesParameters" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.property.findMatchesParameters"></a>

```java
public GlueMlTransformParametersFindMatchesParametersOutputReference getFindMatchesParameters();
```

- *Type:* <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference">GlueMlTransformParametersFindMatchesParametersOutputReference</a>

---

##### `findMatchesParametersInput`<sup>Optional</sup> <a name="findMatchesParametersInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.property.findMatchesParametersInput"></a>

```java
public GlueMlTransformParametersFindMatchesParameters getFindMatchesParametersInput();
```

- *Type:* <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters">GlueMlTransformParametersFindMatchesParameters</a>

---

##### `transformTypeInput`<sup>Optional</sup> <a name="transformTypeInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.property.transformTypeInput"></a>

```java
public java.lang.String getTransformTypeInput();
```

- *Type:* java.lang.String

---

##### `transformType`<sup>Required</sup> <a name="transformType" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.property.transformType"></a>

```java
public java.lang.String getTransformType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.property.internalValue"></a>

```java
public GlueMlTransformParameters getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParameters">GlueMlTransformParameters</a>

---


### GlueMlTransformSchemaList <a name="GlueMlTransformSchemaList" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_ml_transform.GlueMlTransformSchemaList;

new GlueMlTransformSchemaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.get"></a>

```java
public GlueMlTransformSchemaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GlueMlTransformSchemaOutputReference <a name="GlueMlTransformSchemaOutputReference" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_ml_transform.GlueMlTransformSchemaOutputReference;

new GlueMlTransformSchemaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.property.dataType">dataType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchema">GlueMlTransformSchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.property.dataType"></a>

```java
public java.lang.String getDataType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.property.internalValue"></a>

```java
public GlueMlTransformSchema getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchema">GlueMlTransformSchema</a>

---



