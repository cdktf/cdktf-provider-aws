# `dynamodbTableExport` Submodule <a name="`dynamodbTableExport` Submodule" id="@cdktf/provider-aws.dynamodbTableExport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DynamodbTableExport <a name="DynamodbTableExport" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/dynamodb_table_export aws_dynamodb_table_export}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dynamodb_table_export.DynamodbTableExport;

DynamodbTableExport.Builder.create(Construct scope, java.lang.String id)
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
    .s3Bucket(java.lang.String)
    .tableArn(java.lang.String)
//  .exportFormat(java.lang.String)
//  .exportTime(java.lang.String)
//  .exportType(java.lang.String)
//  .id(java.lang.String)
//  .incrementalExportSpecification(DynamodbTableExportIncrementalExportSpecification)
//  .region(java.lang.String)
//  .s3BucketOwner(java.lang.String)
//  .s3Prefix(java.lang.String)
//  .s3SseAlgorithm(java.lang.String)
//  .s3SseKmsKeyId(java.lang.String)
//  .timeouts(DynamodbTableExportTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.s3Bucket">s3Bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/dynamodb_table_export#s3_bucket DynamodbTableExport#s3_bucket}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.tableArn">tableArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/dynamodb_table_export#table_arn DynamodbTableExport#table_arn}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.exportFormat">exportFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/dynamodb_table_export#export_format DynamodbTableExport#export_format}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.exportTime">exportTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/dynamodb_table_export#export_time DynamodbTableExport#export_time}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.exportType">exportType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/dynamodb_table_export#export_type DynamodbTableExport#export_type}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/dynamodb_table_export#id DynamodbTableExport#id}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.incrementalExportSpecification">incrementalExportSpecification</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecification">DynamodbTableExportIncrementalExportSpecification</a></code> | incremental_export_specification block. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.s3BucketOwner">s3BucketOwner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/dynamodb_table_export#s3_bucket_owner DynamodbTableExport#s3_bucket_owner}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.s3Prefix">s3Prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/dynamodb_table_export#s3_prefix DynamodbTableExport#s3_prefix}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.s3SseAlgorithm">s3SseAlgorithm</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/dynamodb_table_export#s3_sse_algorithm DynamodbTableExport#s3_sse_algorithm}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.s3SseKmsKeyId">s3SseKmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/dynamodb_table_export#s3_sse_kms_key_id DynamodbTableExport#s3_sse_kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeouts">DynamodbTableExportTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.s3Bucket"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/dynamodb_table_export#s3_bucket DynamodbTableExport#s3_bucket}.

---

##### `tableArn`<sup>Required</sup> <a name="tableArn" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.tableArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/dynamodb_table_export#table_arn DynamodbTableExport#table_arn}.

---

##### `exportFormat`<sup>Optional</sup> <a name="exportFormat" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.exportFormat"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/dynamodb_table_export#export_format DynamodbTableExport#export_format}.

---

##### `exportTime`<sup>Optional</sup> <a name="exportTime" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.exportTime"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/dynamodb_table_export#export_time DynamodbTableExport#export_time}.

---

##### `exportType`<sup>Optional</sup> <a name="exportType" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.exportType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/dynamodb_table_export#export_type DynamodbTableExport#export_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/dynamodb_table_export#id DynamodbTableExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `incrementalExportSpecification`<sup>Optional</sup> <a name="incrementalExportSpecification" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.incrementalExportSpecification"></a>

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecification">DynamodbTableExportIncrementalExportSpecification</a>

incremental_export_specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/dynamodb_table_export#incremental_export_specification DynamodbTableExport#incremental_export_specification}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/dynamodb_table_export#region DynamodbTableExport#region}

---

##### `s3BucketOwner`<sup>Optional</sup> <a name="s3BucketOwner" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.s3BucketOwner"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/dynamodb_table_export#s3_bucket_owner DynamodbTableExport#s3_bucket_owner}.

---

##### `s3Prefix`<sup>Optional</sup> <a name="s3Prefix" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.s3Prefix"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/dynamodb_table_export#s3_prefix DynamodbTableExport#s3_prefix}.

---

##### `s3SseAlgorithm`<sup>Optional</sup> <a name="s3SseAlgorithm" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.s3SseAlgorithm"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/dynamodb_table_export#s3_sse_algorithm DynamodbTableExport#s3_sse_algorithm}.

---

##### `s3SseKmsKeyId`<sup>Optional</sup> <a name="s3SseKmsKeyId" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.s3SseKmsKeyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/dynamodb_table_export#s3_sse_kms_key_id DynamodbTableExport#s3_sse_kms_key_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeouts">DynamodbTableExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/dynamodb_table_export#timeouts DynamodbTableExport#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.putIncrementalExportSpecification">putIncrementalExportSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.resetExportFormat">resetExportFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.resetExportTime">resetExportTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.resetExportType">resetExportType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.resetIncrementalExportSpecification">resetIncrementalExportSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.resetS3BucketOwner">resetS3BucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.resetS3Prefix">resetS3Prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.resetS3SseAlgorithm">resetS3SseAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.resetS3SseKmsKeyId">resetS3SseKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIncrementalExportSpecification` <a name="putIncrementalExportSpecification" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.putIncrementalExportSpecification"></a>

```java
public void putIncrementalExportSpecification(DynamodbTableExportIncrementalExportSpecification value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.putIncrementalExportSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecification">DynamodbTableExportIncrementalExportSpecification</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.putTimeouts"></a>

```java
public void putTimeouts(DynamodbTableExportTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeouts">DynamodbTableExportTimeouts</a>

---

##### `resetExportFormat` <a name="resetExportFormat" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.resetExportFormat"></a>

```java
public void resetExportFormat()
```

##### `resetExportTime` <a name="resetExportTime" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.resetExportTime"></a>

```java
public void resetExportTime()
```

##### `resetExportType` <a name="resetExportType" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.resetExportType"></a>

```java
public void resetExportType()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.resetId"></a>

```java
public void resetId()
```

##### `resetIncrementalExportSpecification` <a name="resetIncrementalExportSpecification" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.resetIncrementalExportSpecification"></a>

```java
public void resetIncrementalExportSpecification()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetS3BucketOwner` <a name="resetS3BucketOwner" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.resetS3BucketOwner"></a>

```java
public void resetS3BucketOwner()
```

##### `resetS3Prefix` <a name="resetS3Prefix" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.resetS3Prefix"></a>

```java
public void resetS3Prefix()
```

##### `resetS3SseAlgorithm` <a name="resetS3SseAlgorithm" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.resetS3SseAlgorithm"></a>

```java
public void resetS3SseAlgorithm()
```

##### `resetS3SseKmsKeyId` <a name="resetS3SseKmsKeyId" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.resetS3SseKmsKeyId"></a>

```java
public void resetS3SseKmsKeyId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DynamodbTableExport resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.dynamodb_table_export.DynamodbTableExport;

DynamodbTableExport.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.dynamodb_table_export.DynamodbTableExport;

DynamodbTableExport.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.dynamodb_table_export.DynamodbTableExport;

DynamodbTableExport.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.dynamodb_table_export.DynamodbTableExport;

DynamodbTableExport.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DynamodbTableExport.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DynamodbTableExport resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DynamodbTableExport to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DynamodbTableExport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/dynamodb_table_export#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DynamodbTableExport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.billedSizeInBytes">billedSizeInBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.exportStatus">exportStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.incrementalExportSpecification">incrementalExportSpecification</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference">DynamodbTableExportIncrementalExportSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.itemCount">itemCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.manifestFilesS3Key">manifestFilesS3Key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference">DynamodbTableExportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.exportFormatInput">exportFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.exportTimeInput">exportTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.exportTypeInput">exportTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.incrementalExportSpecificationInput">incrementalExportSpecificationInput</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecification">DynamodbTableExportIncrementalExportSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.s3BucketInput">s3BucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.s3BucketOwnerInput">s3BucketOwnerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.s3PrefixInput">s3PrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.s3SseAlgorithmInput">s3SseAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.s3SseKmsKeyIdInput">s3SseKmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.tableArnInput">tableArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeouts">DynamodbTableExportTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.exportFormat">exportFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.exportTime">exportTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.exportType">exportType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.s3Bucket">s3Bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.s3BucketOwner">s3BucketOwner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.s3Prefix">s3Prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.s3SseAlgorithm">s3SseAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.s3SseKmsKeyId">s3SseKmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.tableArn">tableArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `billedSizeInBytes`<sup>Required</sup> <a name="billedSizeInBytes" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.billedSizeInBytes"></a>

```java
public java.lang.Number getBilledSizeInBytes();
```

- *Type:* java.lang.Number

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `exportStatus`<sup>Required</sup> <a name="exportStatus" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.exportStatus"></a>

```java
public java.lang.String getExportStatus();
```

- *Type:* java.lang.String

---

##### `incrementalExportSpecification`<sup>Required</sup> <a name="incrementalExportSpecification" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.incrementalExportSpecification"></a>

```java
public DynamodbTableExportIncrementalExportSpecificationOutputReference getIncrementalExportSpecification();
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference">DynamodbTableExportIncrementalExportSpecificationOutputReference</a>

---

##### `itemCount`<sup>Required</sup> <a name="itemCount" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.itemCount"></a>

```java
public java.lang.Number getItemCount();
```

- *Type:* java.lang.Number

---

##### `manifestFilesS3Key`<sup>Required</sup> <a name="manifestFilesS3Key" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.manifestFilesS3Key"></a>

```java
public java.lang.String getManifestFilesS3Key();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.timeouts"></a>

```java
public DynamodbTableExportTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference">DynamodbTableExportTimeoutsOutputReference</a>

---

##### `exportFormatInput`<sup>Optional</sup> <a name="exportFormatInput" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.exportFormatInput"></a>

```java
public java.lang.String getExportFormatInput();
```

- *Type:* java.lang.String

---

##### `exportTimeInput`<sup>Optional</sup> <a name="exportTimeInput" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.exportTimeInput"></a>

```java
public java.lang.String getExportTimeInput();
```

- *Type:* java.lang.String

---

##### `exportTypeInput`<sup>Optional</sup> <a name="exportTypeInput" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.exportTypeInput"></a>

```java
public java.lang.String getExportTypeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `incrementalExportSpecificationInput`<sup>Optional</sup> <a name="incrementalExportSpecificationInput" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.incrementalExportSpecificationInput"></a>

```java
public DynamodbTableExportIncrementalExportSpecification getIncrementalExportSpecificationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecification">DynamodbTableExportIncrementalExportSpecification</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `s3BucketInput`<sup>Optional</sup> <a name="s3BucketInput" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.s3BucketInput"></a>

```java
public java.lang.String getS3BucketInput();
```

- *Type:* java.lang.String

---

##### `s3BucketOwnerInput`<sup>Optional</sup> <a name="s3BucketOwnerInput" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.s3BucketOwnerInput"></a>

```java
public java.lang.String getS3BucketOwnerInput();
```

- *Type:* java.lang.String

---

##### `s3PrefixInput`<sup>Optional</sup> <a name="s3PrefixInput" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.s3PrefixInput"></a>

```java
public java.lang.String getS3PrefixInput();
```

- *Type:* java.lang.String

---

##### `s3SseAlgorithmInput`<sup>Optional</sup> <a name="s3SseAlgorithmInput" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.s3SseAlgorithmInput"></a>

```java
public java.lang.String getS3SseAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `s3SseKmsKeyIdInput`<sup>Optional</sup> <a name="s3SseKmsKeyIdInput" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.s3SseKmsKeyIdInput"></a>

```java
public java.lang.String getS3SseKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `tableArnInput`<sup>Optional</sup> <a name="tableArnInput" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.tableArnInput"></a>

```java
public java.lang.String getTableArnInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeouts">DynamodbTableExportTimeouts</a>

---

##### `exportFormat`<sup>Required</sup> <a name="exportFormat" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.exportFormat"></a>

```java
public java.lang.String getExportFormat();
```

- *Type:* java.lang.String

---

##### `exportTime`<sup>Required</sup> <a name="exportTime" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.exportTime"></a>

```java
public java.lang.String getExportTime();
```

- *Type:* java.lang.String

---

##### `exportType`<sup>Required</sup> <a name="exportType" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.exportType"></a>

```java
public java.lang.String getExportType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.s3Bucket"></a>

```java
public java.lang.String getS3Bucket();
```

- *Type:* java.lang.String

---

##### `s3BucketOwner`<sup>Required</sup> <a name="s3BucketOwner" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.s3BucketOwner"></a>

```java
public java.lang.String getS3BucketOwner();
```

- *Type:* java.lang.String

---

##### `s3Prefix`<sup>Required</sup> <a name="s3Prefix" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.s3Prefix"></a>

```java
public java.lang.String getS3Prefix();
```

- *Type:* java.lang.String

---

##### `s3SseAlgorithm`<sup>Required</sup> <a name="s3SseAlgorithm" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.s3SseAlgorithm"></a>

```java
public java.lang.String getS3SseAlgorithm();
```

- *Type:* java.lang.String

---

##### `s3SseKmsKeyId`<sup>Required</sup> <a name="s3SseKmsKeyId" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.s3SseKmsKeyId"></a>

```java
public java.lang.String getS3SseKmsKeyId();
```

- *Type:* java.lang.String

---

##### `tableArn`<sup>Required</sup> <a name="tableArn" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.tableArn"></a>

```java
public java.lang.String getTableArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DynamodbTableExportConfig <a name="DynamodbTableExportConfig" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dynamodb_table_export.DynamodbTableExportConfig;

DynamodbTableExportConfig.builder()
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
    .s3Bucket(java.lang.String)
    .tableArn(java.lang.String)
//  .exportFormat(java.lang.String)
//  .exportTime(java.lang.String)
//  .exportType(java.lang.String)
//  .id(java.lang.String)
//  .incrementalExportSpecification(DynamodbTableExportIncrementalExportSpecification)
//  .region(java.lang.String)
//  .s3BucketOwner(java.lang.String)
//  .s3Prefix(java.lang.String)
//  .s3SseAlgorithm(java.lang.String)
//  .s3SseKmsKeyId(java.lang.String)
//  .timeouts(DynamodbTableExportTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.s3Bucket">s3Bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/dynamodb_table_export#s3_bucket DynamodbTableExport#s3_bucket}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.tableArn">tableArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/dynamodb_table_export#table_arn DynamodbTableExport#table_arn}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.exportFormat">exportFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/dynamodb_table_export#export_format DynamodbTableExport#export_format}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.exportTime">exportTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/dynamodb_table_export#export_time DynamodbTableExport#export_time}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.exportType">exportType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/dynamodb_table_export#export_type DynamodbTableExport#export_type}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/dynamodb_table_export#id DynamodbTableExport#id}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.incrementalExportSpecification">incrementalExportSpecification</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecification">DynamodbTableExportIncrementalExportSpecification</a></code> | incremental_export_specification block. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.s3BucketOwner">s3BucketOwner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/dynamodb_table_export#s3_bucket_owner DynamodbTableExport#s3_bucket_owner}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.s3Prefix">s3Prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/dynamodb_table_export#s3_prefix DynamodbTableExport#s3_prefix}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.s3SseAlgorithm">s3SseAlgorithm</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/dynamodb_table_export#s3_sse_algorithm DynamodbTableExport#s3_sse_algorithm}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.s3SseKmsKeyId">s3SseKmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/dynamodb_table_export#s3_sse_kms_key_id DynamodbTableExport#s3_sse_kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeouts">DynamodbTableExportTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.s3Bucket"></a>

```java
public java.lang.String getS3Bucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/dynamodb_table_export#s3_bucket DynamodbTableExport#s3_bucket}.

---

##### `tableArn`<sup>Required</sup> <a name="tableArn" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.tableArn"></a>

```java
public java.lang.String getTableArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/dynamodb_table_export#table_arn DynamodbTableExport#table_arn}.

---

##### `exportFormat`<sup>Optional</sup> <a name="exportFormat" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.exportFormat"></a>

```java
public java.lang.String getExportFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/dynamodb_table_export#export_format DynamodbTableExport#export_format}.

---

##### `exportTime`<sup>Optional</sup> <a name="exportTime" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.exportTime"></a>

```java
public java.lang.String getExportTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/dynamodb_table_export#export_time DynamodbTableExport#export_time}.

---

##### `exportType`<sup>Optional</sup> <a name="exportType" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.exportType"></a>

```java
public java.lang.String getExportType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/dynamodb_table_export#export_type DynamodbTableExport#export_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/dynamodb_table_export#id DynamodbTableExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `incrementalExportSpecification`<sup>Optional</sup> <a name="incrementalExportSpecification" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.incrementalExportSpecification"></a>

```java
public DynamodbTableExportIncrementalExportSpecification getIncrementalExportSpecification();
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecification">DynamodbTableExportIncrementalExportSpecification</a>

incremental_export_specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/dynamodb_table_export#incremental_export_specification DynamodbTableExport#incremental_export_specification}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/dynamodb_table_export#region DynamodbTableExport#region}

---

##### `s3BucketOwner`<sup>Optional</sup> <a name="s3BucketOwner" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.s3BucketOwner"></a>

```java
public java.lang.String getS3BucketOwner();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/dynamodb_table_export#s3_bucket_owner DynamodbTableExport#s3_bucket_owner}.

---

##### `s3Prefix`<sup>Optional</sup> <a name="s3Prefix" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.s3Prefix"></a>

```java
public java.lang.String getS3Prefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/dynamodb_table_export#s3_prefix DynamodbTableExport#s3_prefix}.

---

##### `s3SseAlgorithm`<sup>Optional</sup> <a name="s3SseAlgorithm" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.s3SseAlgorithm"></a>

```java
public java.lang.String getS3SseAlgorithm();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/dynamodb_table_export#s3_sse_algorithm DynamodbTableExport#s3_sse_algorithm}.

---

##### `s3SseKmsKeyId`<sup>Optional</sup> <a name="s3SseKmsKeyId" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.s3SseKmsKeyId"></a>

```java
public java.lang.String getS3SseKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/dynamodb_table_export#s3_sse_kms_key_id DynamodbTableExport#s3_sse_kms_key_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.timeouts"></a>

```java
public DynamodbTableExportTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeouts">DynamodbTableExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/dynamodb_table_export#timeouts DynamodbTableExport#timeouts}

---

### DynamodbTableExportIncrementalExportSpecification <a name="DynamodbTableExportIncrementalExportSpecification" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecification.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dynamodb_table_export.DynamodbTableExportIncrementalExportSpecification;

DynamodbTableExportIncrementalExportSpecification.builder()
//  .exportFromTime(java.lang.String)
//  .exportToTime(java.lang.String)
//  .exportViewType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecification.property.exportFromTime">exportFromTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/dynamodb_table_export#export_from_time DynamodbTableExport#export_from_time}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecification.property.exportToTime">exportToTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/dynamodb_table_export#export_to_time DynamodbTableExport#export_to_time}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecification.property.exportViewType">exportViewType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/dynamodb_table_export#export_view_type DynamodbTableExport#export_view_type}. |

---

##### `exportFromTime`<sup>Optional</sup> <a name="exportFromTime" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecification.property.exportFromTime"></a>

```java
public java.lang.String getExportFromTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/dynamodb_table_export#export_from_time DynamodbTableExport#export_from_time}.

---

##### `exportToTime`<sup>Optional</sup> <a name="exportToTime" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecification.property.exportToTime"></a>

```java
public java.lang.String getExportToTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/dynamodb_table_export#export_to_time DynamodbTableExport#export_to_time}.

---

##### `exportViewType`<sup>Optional</sup> <a name="exportViewType" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecification.property.exportViewType"></a>

```java
public java.lang.String getExportViewType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/dynamodb_table_export#export_view_type DynamodbTableExport#export_view_type}.

---

### DynamodbTableExportTimeouts <a name="DynamodbTableExportTimeouts" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dynamodb_table_export.DynamodbTableExportTimeouts;

DynamodbTableExportTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/dynamodb_table_export#create DynamodbTableExport#create}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/dynamodb_table_export#delete DynamodbTableExport#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/dynamodb_table_export#create DynamodbTableExport#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/dynamodb_table_export#delete DynamodbTableExport#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DynamodbTableExportIncrementalExportSpecificationOutputReference <a name="DynamodbTableExportIncrementalExportSpecificationOutputReference" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dynamodb_table_export.DynamodbTableExportIncrementalExportSpecificationOutputReference;

new DynamodbTableExportIncrementalExportSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.resetExportFromTime">resetExportFromTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.resetExportToTime">resetExportToTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.resetExportViewType">resetExportViewType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExportFromTime` <a name="resetExportFromTime" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.resetExportFromTime"></a>

```java
public void resetExportFromTime()
```

##### `resetExportToTime` <a name="resetExportToTime" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.resetExportToTime"></a>

```java
public void resetExportToTime()
```

##### `resetExportViewType` <a name="resetExportViewType" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.resetExportViewType"></a>

```java
public void resetExportViewType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.property.exportFromTimeInput">exportFromTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.property.exportToTimeInput">exportToTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.property.exportViewTypeInput">exportViewTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.property.exportFromTime">exportFromTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.property.exportToTime">exportToTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.property.exportViewType">exportViewType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecification">DynamodbTableExportIncrementalExportSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `exportFromTimeInput`<sup>Optional</sup> <a name="exportFromTimeInput" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.property.exportFromTimeInput"></a>

```java
public java.lang.String getExportFromTimeInput();
```

- *Type:* java.lang.String

---

##### `exportToTimeInput`<sup>Optional</sup> <a name="exportToTimeInput" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.property.exportToTimeInput"></a>

```java
public java.lang.String getExportToTimeInput();
```

- *Type:* java.lang.String

---

##### `exportViewTypeInput`<sup>Optional</sup> <a name="exportViewTypeInput" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.property.exportViewTypeInput"></a>

```java
public java.lang.String getExportViewTypeInput();
```

- *Type:* java.lang.String

---

##### `exportFromTime`<sup>Required</sup> <a name="exportFromTime" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.property.exportFromTime"></a>

```java
public java.lang.String getExportFromTime();
```

- *Type:* java.lang.String

---

##### `exportToTime`<sup>Required</sup> <a name="exportToTime" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.property.exportToTime"></a>

```java
public java.lang.String getExportToTime();
```

- *Type:* java.lang.String

---

##### `exportViewType`<sup>Required</sup> <a name="exportViewType" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.property.exportViewType"></a>

```java
public java.lang.String getExportViewType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.property.internalValue"></a>

```java
public DynamodbTableExportIncrementalExportSpecification getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecification">DynamodbTableExportIncrementalExportSpecification</a>

---


### DynamodbTableExportTimeoutsOutputReference <a name="DynamodbTableExportTimeoutsOutputReference" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dynamodb_table_export.DynamodbTableExportTimeoutsOutputReference;

new DynamodbTableExportTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeouts">DynamodbTableExportTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeouts">DynamodbTableExportTimeouts</a>

---



