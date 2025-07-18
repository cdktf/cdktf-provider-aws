# `dynamodbTable` Submodule <a name="`dynamodbTable` Submodule" id="@cdktf/provider-aws.dynamodbTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DynamodbTable <a name="DynamodbTable" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table aws_dynamodb_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dynamodb_table.DynamodbTable;

DynamodbTable.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
//  .attribute(IResolvable)
//  .attribute(java.util.List<DynamodbTableAttribute>)
//  .billingMode(java.lang.String)
//  .deletionProtectionEnabled(java.lang.Boolean)
//  .deletionProtectionEnabled(IResolvable)
//  .globalSecondaryIndex(IResolvable)
//  .globalSecondaryIndex(java.util.List<DynamodbTableGlobalSecondaryIndex>)
//  .hashKey(java.lang.String)
//  .id(java.lang.String)
//  .importTable(DynamodbTableImportTable)
//  .localSecondaryIndex(IResolvable)
//  .localSecondaryIndex(java.util.List<DynamodbTableLocalSecondaryIndex>)
//  .onDemandThroughput(DynamodbTableOnDemandThroughput)
//  .pointInTimeRecovery(DynamodbTablePointInTimeRecovery)
//  .rangeKey(java.lang.String)
//  .readCapacity(java.lang.Number)
//  .region(java.lang.String)
//  .replica(IResolvable)
//  .replica(java.util.List<DynamodbTableReplica>)
//  .restoreDateTime(java.lang.String)
//  .restoreSourceName(java.lang.String)
//  .restoreSourceTableArn(java.lang.String)
//  .restoreToLatestTime(java.lang.Boolean)
//  .restoreToLatestTime(IResolvable)
//  .serverSideEncryption(DynamodbTableServerSideEncryption)
//  .streamEnabled(java.lang.Boolean)
//  .streamEnabled(IResolvable)
//  .streamViewType(java.lang.String)
//  .tableClass(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DynamodbTableTimeouts)
//  .ttl(DynamodbTableTtl)
//  .writeCapacity(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#name DynamodbTable#name}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.attribute">attribute</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttribute">DynamodbTableAttribute</a>></code> | attribute block. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.billingMode">billingMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#billing_mode DynamodbTable#billing_mode}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#deletion_protection_enabled DynamodbTable#deletion_protection_enabled}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.globalSecondaryIndex">globalSecondaryIndex</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex">DynamodbTableGlobalSecondaryIndex</a>></code> | global_secondary_index block. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.hashKey">hashKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#hash_key DynamodbTable#hash_key}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#id DynamodbTable#id}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.importTable">importTable</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTable">DynamodbTableImportTable</a></code> | import_table block. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.localSecondaryIndex">localSecondaryIndex</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndex">DynamodbTableLocalSecondaryIndex</a>></code> | local_secondary_index block. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.onDemandThroughput">onDemandThroughput</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughput">DynamodbTableOnDemandThroughput</a></code> | on_demand_throughput block. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.pointInTimeRecovery">pointInTimeRecovery</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecovery">DynamodbTablePointInTimeRecovery</a></code> | point_in_time_recovery block. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.rangeKey">rangeKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#range_key DynamodbTable#range_key}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.readCapacity">readCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#read_capacity DynamodbTable#read_capacity}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.replica">replica</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica">DynamodbTableReplica</a>></code> | replica block. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.restoreDateTime">restoreDateTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#restore_date_time DynamodbTable#restore_date_time}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.restoreSourceName">restoreSourceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#restore_source_name DynamodbTable#restore_source_name}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.restoreSourceTableArn">restoreSourceTableArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#restore_source_table_arn DynamodbTable#restore_source_table_arn}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.restoreToLatestTime">restoreToLatestTime</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#restore_to_latest_time DynamodbTable#restore_to_latest_time}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.serverSideEncryption">serverSideEncryption</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryption">DynamodbTableServerSideEncryption</a></code> | server_side_encryption block. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.streamEnabled">streamEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#stream_enabled DynamodbTable#stream_enabled}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.streamViewType">streamViewType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#stream_view_type DynamodbTable#stream_view_type}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.tableClass">tableClass</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#table_class DynamodbTable#table_class}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#tags DynamodbTable#tags}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#tags_all DynamodbTable#tags_all}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeouts">DynamodbTableTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.ttl">ttl</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtl">DynamodbTableTtl</a></code> | ttl block. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.writeCapacity">writeCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#write_capacity DynamodbTable#write_capacity}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#name DynamodbTable#name}.

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.attribute"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttribute">DynamodbTableAttribute</a>>

attribute block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#attribute DynamodbTable#attribute}

---

##### `billingMode`<sup>Optional</sup> <a name="billingMode" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.billingMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#billing_mode DynamodbTable#billing_mode}.

---

##### `deletionProtectionEnabled`<sup>Optional</sup> <a name="deletionProtectionEnabled" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.deletionProtectionEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#deletion_protection_enabled DynamodbTable#deletion_protection_enabled}.

---

##### `globalSecondaryIndex`<sup>Optional</sup> <a name="globalSecondaryIndex" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.globalSecondaryIndex"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex">DynamodbTableGlobalSecondaryIndex</a>>

global_secondary_index block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#global_secondary_index DynamodbTable#global_secondary_index}

---

##### `hashKey`<sup>Optional</sup> <a name="hashKey" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.hashKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#hash_key DynamodbTable#hash_key}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#id DynamodbTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `importTable`<sup>Optional</sup> <a name="importTable" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.importTable"></a>

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTable">DynamodbTableImportTable</a>

import_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#import_table DynamodbTable#import_table}

---

##### `localSecondaryIndex`<sup>Optional</sup> <a name="localSecondaryIndex" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.localSecondaryIndex"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndex">DynamodbTableLocalSecondaryIndex</a>>

local_secondary_index block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#local_secondary_index DynamodbTable#local_secondary_index}

---

##### `onDemandThroughput`<sup>Optional</sup> <a name="onDemandThroughput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.onDemandThroughput"></a>

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughput">DynamodbTableOnDemandThroughput</a>

on_demand_throughput block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#on_demand_throughput DynamodbTable#on_demand_throughput}

---

##### `pointInTimeRecovery`<sup>Optional</sup> <a name="pointInTimeRecovery" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.pointInTimeRecovery"></a>

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecovery">DynamodbTablePointInTimeRecovery</a>

point_in_time_recovery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#point_in_time_recovery DynamodbTable#point_in_time_recovery}

---

##### `rangeKey`<sup>Optional</sup> <a name="rangeKey" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.rangeKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#range_key DynamodbTable#range_key}.

---

##### `readCapacity`<sup>Optional</sup> <a name="readCapacity" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.readCapacity"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#read_capacity DynamodbTable#read_capacity}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#region DynamodbTable#region}

---

##### `replica`<sup>Optional</sup> <a name="replica" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.replica"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica">DynamodbTableReplica</a>>

replica block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#replica DynamodbTable#replica}

---

##### `restoreDateTime`<sup>Optional</sup> <a name="restoreDateTime" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.restoreDateTime"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#restore_date_time DynamodbTable#restore_date_time}.

---

##### `restoreSourceName`<sup>Optional</sup> <a name="restoreSourceName" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.restoreSourceName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#restore_source_name DynamodbTable#restore_source_name}.

---

##### `restoreSourceTableArn`<sup>Optional</sup> <a name="restoreSourceTableArn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.restoreSourceTableArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#restore_source_table_arn DynamodbTable#restore_source_table_arn}.

---

##### `restoreToLatestTime`<sup>Optional</sup> <a name="restoreToLatestTime" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.restoreToLatestTime"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#restore_to_latest_time DynamodbTable#restore_to_latest_time}.

---

##### `serverSideEncryption`<sup>Optional</sup> <a name="serverSideEncryption" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.serverSideEncryption"></a>

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryption">DynamodbTableServerSideEncryption</a>

server_side_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#server_side_encryption DynamodbTable#server_side_encryption}

---

##### `streamEnabled`<sup>Optional</sup> <a name="streamEnabled" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.streamEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#stream_enabled DynamodbTable#stream_enabled}.

---

##### `streamViewType`<sup>Optional</sup> <a name="streamViewType" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.streamViewType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#stream_view_type DynamodbTable#stream_view_type}.

---

##### `tableClass`<sup>Optional</sup> <a name="tableClass" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.tableClass"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#table_class DynamodbTable#table_class}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#tags DynamodbTable#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#tags_all DynamodbTable#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeouts">DynamodbTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#timeouts DynamodbTable#timeouts}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.ttl"></a>

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtl">DynamodbTableTtl</a>

ttl block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#ttl DynamodbTable#ttl}

---

##### `writeCapacity`<sup>Optional</sup> <a name="writeCapacity" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.writeCapacity"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#write_capacity DynamodbTable#write_capacity}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.putAttribute">putAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.putGlobalSecondaryIndex">putGlobalSecondaryIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.putImportTable">putImportTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.putLocalSecondaryIndex">putLocalSecondaryIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.putOnDemandThroughput">putOnDemandThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.putPointInTimeRecovery">putPointInTimeRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.putReplica">putReplica</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.putServerSideEncryption">putServerSideEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.putTtl">putTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetAttribute">resetAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetBillingMode">resetBillingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetDeletionProtectionEnabled">resetDeletionProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetGlobalSecondaryIndex">resetGlobalSecondaryIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetHashKey">resetHashKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetImportTable">resetImportTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetLocalSecondaryIndex">resetLocalSecondaryIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetOnDemandThroughput">resetOnDemandThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetPointInTimeRecovery">resetPointInTimeRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetRangeKey">resetRangeKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetReadCapacity">resetReadCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetReplica">resetReplica</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetRestoreDateTime">resetRestoreDateTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetRestoreSourceName">resetRestoreSourceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetRestoreSourceTableArn">resetRestoreSourceTableArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetRestoreToLatestTime">resetRestoreToLatestTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetServerSideEncryption">resetServerSideEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetStreamEnabled">resetStreamEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetStreamViewType">resetStreamViewType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetTableClass">resetTableClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetTtl">resetTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetWriteCapacity">resetWriteCapacity</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAttribute` <a name="putAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putAttribute"></a>

```java
public void putAttribute(IResolvable OR java.util.List<DynamodbTableAttribute> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putAttribute.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttribute">DynamodbTableAttribute</a>>

---

##### `putGlobalSecondaryIndex` <a name="putGlobalSecondaryIndex" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putGlobalSecondaryIndex"></a>

```java
public void putGlobalSecondaryIndex(IResolvable OR java.util.List<DynamodbTableGlobalSecondaryIndex> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putGlobalSecondaryIndex.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex">DynamodbTableGlobalSecondaryIndex</a>>

---

##### `putImportTable` <a name="putImportTable" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putImportTable"></a>

```java
public void putImportTable(DynamodbTableImportTable value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putImportTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTable">DynamodbTableImportTable</a>

---

##### `putLocalSecondaryIndex` <a name="putLocalSecondaryIndex" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putLocalSecondaryIndex"></a>

```java
public void putLocalSecondaryIndex(IResolvable OR java.util.List<DynamodbTableLocalSecondaryIndex> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putLocalSecondaryIndex.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndex">DynamodbTableLocalSecondaryIndex</a>>

---

##### `putOnDemandThroughput` <a name="putOnDemandThroughput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putOnDemandThroughput"></a>

```java
public void putOnDemandThroughput(DynamodbTableOnDemandThroughput value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putOnDemandThroughput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughput">DynamodbTableOnDemandThroughput</a>

---

##### `putPointInTimeRecovery` <a name="putPointInTimeRecovery" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putPointInTimeRecovery"></a>

```java
public void putPointInTimeRecovery(DynamodbTablePointInTimeRecovery value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putPointInTimeRecovery.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecovery">DynamodbTablePointInTimeRecovery</a>

---

##### `putReplica` <a name="putReplica" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putReplica"></a>

```java
public void putReplica(IResolvable OR java.util.List<DynamodbTableReplica> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putReplica.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica">DynamodbTableReplica</a>>

---

##### `putServerSideEncryption` <a name="putServerSideEncryption" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putServerSideEncryption"></a>

```java
public void putServerSideEncryption(DynamodbTableServerSideEncryption value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putServerSideEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryption">DynamodbTableServerSideEncryption</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putTimeouts"></a>

```java
public void putTimeouts(DynamodbTableTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeouts">DynamodbTableTimeouts</a>

---

##### `putTtl` <a name="putTtl" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putTtl"></a>

```java
public void putTtl(DynamodbTableTtl value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putTtl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtl">DynamodbTableTtl</a>

---

##### `resetAttribute` <a name="resetAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetAttribute"></a>

```java
public void resetAttribute()
```

##### `resetBillingMode` <a name="resetBillingMode" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetBillingMode"></a>

```java
public void resetBillingMode()
```

##### `resetDeletionProtectionEnabled` <a name="resetDeletionProtectionEnabled" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetDeletionProtectionEnabled"></a>

```java
public void resetDeletionProtectionEnabled()
```

##### `resetGlobalSecondaryIndex` <a name="resetGlobalSecondaryIndex" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetGlobalSecondaryIndex"></a>

```java
public void resetGlobalSecondaryIndex()
```

##### `resetHashKey` <a name="resetHashKey" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetHashKey"></a>

```java
public void resetHashKey()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetId"></a>

```java
public void resetId()
```

##### `resetImportTable` <a name="resetImportTable" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetImportTable"></a>

```java
public void resetImportTable()
```

##### `resetLocalSecondaryIndex` <a name="resetLocalSecondaryIndex" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetLocalSecondaryIndex"></a>

```java
public void resetLocalSecondaryIndex()
```

##### `resetOnDemandThroughput` <a name="resetOnDemandThroughput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetOnDemandThroughput"></a>

```java
public void resetOnDemandThroughput()
```

##### `resetPointInTimeRecovery` <a name="resetPointInTimeRecovery" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetPointInTimeRecovery"></a>

```java
public void resetPointInTimeRecovery()
```

##### `resetRangeKey` <a name="resetRangeKey" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetRangeKey"></a>

```java
public void resetRangeKey()
```

##### `resetReadCapacity` <a name="resetReadCapacity" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetReadCapacity"></a>

```java
public void resetReadCapacity()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetReplica` <a name="resetReplica" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetReplica"></a>

```java
public void resetReplica()
```

##### `resetRestoreDateTime` <a name="resetRestoreDateTime" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetRestoreDateTime"></a>

```java
public void resetRestoreDateTime()
```

##### `resetRestoreSourceName` <a name="resetRestoreSourceName" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetRestoreSourceName"></a>

```java
public void resetRestoreSourceName()
```

##### `resetRestoreSourceTableArn` <a name="resetRestoreSourceTableArn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetRestoreSourceTableArn"></a>

```java
public void resetRestoreSourceTableArn()
```

##### `resetRestoreToLatestTime` <a name="resetRestoreToLatestTime" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetRestoreToLatestTime"></a>

```java
public void resetRestoreToLatestTime()
```

##### `resetServerSideEncryption` <a name="resetServerSideEncryption" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetServerSideEncryption"></a>

```java
public void resetServerSideEncryption()
```

##### `resetStreamEnabled` <a name="resetStreamEnabled" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetStreamEnabled"></a>

```java
public void resetStreamEnabled()
```

##### `resetStreamViewType` <a name="resetStreamViewType" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetStreamViewType"></a>

```java
public void resetStreamViewType()
```

##### `resetTableClass` <a name="resetTableClass" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetTableClass"></a>

```java
public void resetTableClass()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetTtl"></a>

```java
public void resetTtl()
```

##### `resetWriteCapacity` <a name="resetWriteCapacity" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetWriteCapacity"></a>

```java
public void resetWriteCapacity()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DynamodbTable resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.dynamodb_table.DynamodbTable;

DynamodbTable.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.dynamodb_table.DynamodbTable;

DynamodbTable.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.dynamodb_table.DynamodbTable;

DynamodbTable.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.dynamodb_table.DynamodbTable;

DynamodbTable.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DynamodbTable.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DynamodbTable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DynamodbTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DynamodbTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DynamodbTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.attribute">attribute</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList">DynamodbTableAttributeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.globalSecondaryIndex">globalSecondaryIndex</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList">DynamodbTableGlobalSecondaryIndexList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.importTable">importTable</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference">DynamodbTableImportTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.localSecondaryIndex">localSecondaryIndex</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList">DynamodbTableLocalSecondaryIndexList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.onDemandThroughput">onDemandThroughput</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference">DynamodbTableOnDemandThroughputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.pointInTimeRecovery">pointInTimeRecovery</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference">DynamodbTablePointInTimeRecoveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.replica">replica</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList">DynamodbTableReplicaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.serverSideEncryption">serverSideEncryption</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference">DynamodbTableServerSideEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.streamArn">streamArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.streamLabel">streamLabel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference">DynamodbTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.ttl">ttl</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference">DynamodbTableTtlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.attributeInput">attributeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttribute">DynamodbTableAttribute</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.billingModeInput">billingModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.deletionProtectionEnabledInput">deletionProtectionEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.globalSecondaryIndexInput">globalSecondaryIndexInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex">DynamodbTableGlobalSecondaryIndex</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.hashKeyInput">hashKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.importTableInput">importTableInput</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTable">DynamodbTableImportTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.localSecondaryIndexInput">localSecondaryIndexInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndex">DynamodbTableLocalSecondaryIndex</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.onDemandThroughputInput">onDemandThroughputInput</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughput">DynamodbTableOnDemandThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.pointInTimeRecoveryInput">pointInTimeRecoveryInput</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecovery">DynamodbTablePointInTimeRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.rangeKeyInput">rangeKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.readCapacityInput">readCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.replicaInput">replicaInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica">DynamodbTableReplica</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.restoreDateTimeInput">restoreDateTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.restoreSourceNameInput">restoreSourceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.restoreSourceTableArnInput">restoreSourceTableArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.restoreToLatestTimeInput">restoreToLatestTimeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.serverSideEncryptionInput">serverSideEncryptionInput</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryption">DynamodbTableServerSideEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.streamEnabledInput">streamEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.streamViewTypeInput">streamViewTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.tableClassInput">tableClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeouts">DynamodbTableTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.ttlInput">ttlInput</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtl">DynamodbTableTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.writeCapacityInput">writeCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.billingMode">billingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.hashKey">hashKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.rangeKey">rangeKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.readCapacity">readCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.restoreDateTime">restoreDateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.restoreSourceName">restoreSourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.restoreSourceTableArn">restoreSourceTableArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.restoreToLatestTime">restoreToLatestTime</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.streamEnabled">streamEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.streamViewType">streamViewType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.tableClass">tableClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.writeCapacity">writeCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.attribute"></a>

```java
public DynamodbTableAttributeList getAttribute();
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList">DynamodbTableAttributeList</a>

---

##### `globalSecondaryIndex`<sup>Required</sup> <a name="globalSecondaryIndex" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.globalSecondaryIndex"></a>

```java
public DynamodbTableGlobalSecondaryIndexList getGlobalSecondaryIndex();
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList">DynamodbTableGlobalSecondaryIndexList</a>

---

##### `importTable`<sup>Required</sup> <a name="importTable" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.importTable"></a>

```java
public DynamodbTableImportTableOutputReference getImportTable();
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference">DynamodbTableImportTableOutputReference</a>

---

##### `localSecondaryIndex`<sup>Required</sup> <a name="localSecondaryIndex" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.localSecondaryIndex"></a>

```java
public DynamodbTableLocalSecondaryIndexList getLocalSecondaryIndex();
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList">DynamodbTableLocalSecondaryIndexList</a>

---

##### `onDemandThroughput`<sup>Required</sup> <a name="onDemandThroughput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.onDemandThroughput"></a>

```java
public DynamodbTableOnDemandThroughputOutputReference getOnDemandThroughput();
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference">DynamodbTableOnDemandThroughputOutputReference</a>

---

##### `pointInTimeRecovery`<sup>Required</sup> <a name="pointInTimeRecovery" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.pointInTimeRecovery"></a>

```java
public DynamodbTablePointInTimeRecoveryOutputReference getPointInTimeRecovery();
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference">DynamodbTablePointInTimeRecoveryOutputReference</a>

---

##### `replica`<sup>Required</sup> <a name="replica" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.replica"></a>

```java
public DynamodbTableReplicaList getReplica();
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList">DynamodbTableReplicaList</a>

---

##### `serverSideEncryption`<sup>Required</sup> <a name="serverSideEncryption" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.serverSideEncryption"></a>

```java
public DynamodbTableServerSideEncryptionOutputReference getServerSideEncryption();
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference">DynamodbTableServerSideEncryptionOutputReference</a>

---

##### `streamArn`<sup>Required</sup> <a name="streamArn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.streamArn"></a>

```java
public java.lang.String getStreamArn();
```

- *Type:* java.lang.String

---

##### `streamLabel`<sup>Required</sup> <a name="streamLabel" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.streamLabel"></a>

```java
public java.lang.String getStreamLabel();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.timeouts"></a>

```java
public DynamodbTableTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference">DynamodbTableTimeoutsOutputReference</a>

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.ttl"></a>

```java
public DynamodbTableTtlOutputReference getTtl();
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference">DynamodbTableTtlOutputReference</a>

---

##### `attributeInput`<sup>Optional</sup> <a name="attributeInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.attributeInput"></a>

```java
public java.lang.Object getAttributeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttribute">DynamodbTableAttribute</a>>

---

##### `billingModeInput`<sup>Optional</sup> <a name="billingModeInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.billingModeInput"></a>

```java
public java.lang.String getBillingModeInput();
```

- *Type:* java.lang.String

---

##### `deletionProtectionEnabledInput`<sup>Optional</sup> <a name="deletionProtectionEnabledInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.deletionProtectionEnabledInput"></a>

```java
public java.lang.Object getDeletionProtectionEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `globalSecondaryIndexInput`<sup>Optional</sup> <a name="globalSecondaryIndexInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.globalSecondaryIndexInput"></a>

```java
public java.lang.Object getGlobalSecondaryIndexInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex">DynamodbTableGlobalSecondaryIndex</a>>

---

##### `hashKeyInput`<sup>Optional</sup> <a name="hashKeyInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.hashKeyInput"></a>

```java
public java.lang.String getHashKeyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `importTableInput`<sup>Optional</sup> <a name="importTableInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.importTableInput"></a>

```java
public DynamodbTableImportTable getImportTableInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTable">DynamodbTableImportTable</a>

---

##### `localSecondaryIndexInput`<sup>Optional</sup> <a name="localSecondaryIndexInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.localSecondaryIndexInput"></a>

```java
public java.lang.Object getLocalSecondaryIndexInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndex">DynamodbTableLocalSecondaryIndex</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `onDemandThroughputInput`<sup>Optional</sup> <a name="onDemandThroughputInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.onDemandThroughputInput"></a>

```java
public DynamodbTableOnDemandThroughput getOnDemandThroughputInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughput">DynamodbTableOnDemandThroughput</a>

---

##### `pointInTimeRecoveryInput`<sup>Optional</sup> <a name="pointInTimeRecoveryInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.pointInTimeRecoveryInput"></a>

```java
public DynamodbTablePointInTimeRecovery getPointInTimeRecoveryInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecovery">DynamodbTablePointInTimeRecovery</a>

---

##### `rangeKeyInput`<sup>Optional</sup> <a name="rangeKeyInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.rangeKeyInput"></a>

```java
public java.lang.String getRangeKeyInput();
```

- *Type:* java.lang.String

---

##### `readCapacityInput`<sup>Optional</sup> <a name="readCapacityInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.readCapacityInput"></a>

```java
public java.lang.Number getReadCapacityInput();
```

- *Type:* java.lang.Number

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `replicaInput`<sup>Optional</sup> <a name="replicaInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.replicaInput"></a>

```java
public java.lang.Object getReplicaInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica">DynamodbTableReplica</a>>

---

##### `restoreDateTimeInput`<sup>Optional</sup> <a name="restoreDateTimeInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.restoreDateTimeInput"></a>

```java
public java.lang.String getRestoreDateTimeInput();
```

- *Type:* java.lang.String

---

##### `restoreSourceNameInput`<sup>Optional</sup> <a name="restoreSourceNameInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.restoreSourceNameInput"></a>

```java
public java.lang.String getRestoreSourceNameInput();
```

- *Type:* java.lang.String

---

##### `restoreSourceTableArnInput`<sup>Optional</sup> <a name="restoreSourceTableArnInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.restoreSourceTableArnInput"></a>

```java
public java.lang.String getRestoreSourceTableArnInput();
```

- *Type:* java.lang.String

---

##### `restoreToLatestTimeInput`<sup>Optional</sup> <a name="restoreToLatestTimeInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.restoreToLatestTimeInput"></a>

```java
public java.lang.Object getRestoreToLatestTimeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `serverSideEncryptionInput`<sup>Optional</sup> <a name="serverSideEncryptionInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.serverSideEncryptionInput"></a>

```java
public DynamodbTableServerSideEncryption getServerSideEncryptionInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryption">DynamodbTableServerSideEncryption</a>

---

##### `streamEnabledInput`<sup>Optional</sup> <a name="streamEnabledInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.streamEnabledInput"></a>

```java
public java.lang.Object getStreamEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `streamViewTypeInput`<sup>Optional</sup> <a name="streamViewTypeInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.streamViewTypeInput"></a>

```java
public java.lang.String getStreamViewTypeInput();
```

- *Type:* java.lang.String

---

##### `tableClassInput`<sup>Optional</sup> <a name="tableClassInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.tableClassInput"></a>

```java
public java.lang.String getTableClassInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeouts">DynamodbTableTimeouts</a>

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.ttlInput"></a>

```java
public DynamodbTableTtl getTtlInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtl">DynamodbTableTtl</a>

---

##### `writeCapacityInput`<sup>Optional</sup> <a name="writeCapacityInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.writeCapacityInput"></a>

```java
public java.lang.Number getWriteCapacityInput();
```

- *Type:* java.lang.Number

---

##### `billingMode`<sup>Required</sup> <a name="billingMode" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.billingMode"></a>

```java
public java.lang.String getBillingMode();
```

- *Type:* java.lang.String

---

##### `deletionProtectionEnabled`<sup>Required</sup> <a name="deletionProtectionEnabled" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.deletionProtectionEnabled"></a>

```java
public java.lang.Object getDeletionProtectionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hashKey`<sup>Required</sup> <a name="hashKey" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.hashKey"></a>

```java
public java.lang.String getHashKey();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `rangeKey`<sup>Required</sup> <a name="rangeKey" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.rangeKey"></a>

```java
public java.lang.String getRangeKey();
```

- *Type:* java.lang.String

---

##### `readCapacity`<sup>Required</sup> <a name="readCapacity" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.readCapacity"></a>

```java
public java.lang.Number getReadCapacity();
```

- *Type:* java.lang.Number

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `restoreDateTime`<sup>Required</sup> <a name="restoreDateTime" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.restoreDateTime"></a>

```java
public java.lang.String getRestoreDateTime();
```

- *Type:* java.lang.String

---

##### `restoreSourceName`<sup>Required</sup> <a name="restoreSourceName" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.restoreSourceName"></a>

```java
public java.lang.String getRestoreSourceName();
```

- *Type:* java.lang.String

---

##### `restoreSourceTableArn`<sup>Required</sup> <a name="restoreSourceTableArn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.restoreSourceTableArn"></a>

```java
public java.lang.String getRestoreSourceTableArn();
```

- *Type:* java.lang.String

---

##### `restoreToLatestTime`<sup>Required</sup> <a name="restoreToLatestTime" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.restoreToLatestTime"></a>

```java
public java.lang.Object getRestoreToLatestTime();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `streamEnabled`<sup>Required</sup> <a name="streamEnabled" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.streamEnabled"></a>

```java
public java.lang.Object getStreamEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `streamViewType`<sup>Required</sup> <a name="streamViewType" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.streamViewType"></a>

```java
public java.lang.String getStreamViewType();
```

- *Type:* java.lang.String

---

##### `tableClass`<sup>Required</sup> <a name="tableClass" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.tableClass"></a>

```java
public java.lang.String getTableClass();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `writeCapacity`<sup>Required</sup> <a name="writeCapacity" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.writeCapacity"></a>

```java
public java.lang.Number getWriteCapacity();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DynamodbTableAttribute <a name="DynamodbTableAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttribute.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dynamodb_table.DynamodbTableAttribute;

DynamodbTableAttribute.builder()
    .name(java.lang.String)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttribute.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#name DynamodbTable#name}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttribute.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#type DynamodbTable#type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttribute.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#name DynamodbTable#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttribute.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#type DynamodbTable#type}.

---

### DynamodbTableConfig <a name="DynamodbTableConfig" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dynamodb_table.DynamodbTableConfig;

DynamodbTableConfig.builder()
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
    .name(java.lang.String)
//  .attribute(IResolvable)
//  .attribute(java.util.List<DynamodbTableAttribute>)
//  .billingMode(java.lang.String)
//  .deletionProtectionEnabled(java.lang.Boolean)
//  .deletionProtectionEnabled(IResolvable)
//  .globalSecondaryIndex(IResolvable)
//  .globalSecondaryIndex(java.util.List<DynamodbTableGlobalSecondaryIndex>)
//  .hashKey(java.lang.String)
//  .id(java.lang.String)
//  .importTable(DynamodbTableImportTable)
//  .localSecondaryIndex(IResolvable)
//  .localSecondaryIndex(java.util.List<DynamodbTableLocalSecondaryIndex>)
//  .onDemandThroughput(DynamodbTableOnDemandThroughput)
//  .pointInTimeRecovery(DynamodbTablePointInTimeRecovery)
//  .rangeKey(java.lang.String)
//  .readCapacity(java.lang.Number)
//  .region(java.lang.String)
//  .replica(IResolvable)
//  .replica(java.util.List<DynamodbTableReplica>)
//  .restoreDateTime(java.lang.String)
//  .restoreSourceName(java.lang.String)
//  .restoreSourceTableArn(java.lang.String)
//  .restoreToLatestTime(java.lang.Boolean)
//  .restoreToLatestTime(IResolvable)
//  .serverSideEncryption(DynamodbTableServerSideEncryption)
//  .streamEnabled(java.lang.Boolean)
//  .streamEnabled(IResolvable)
//  .streamViewType(java.lang.String)
//  .tableClass(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DynamodbTableTimeouts)
//  .ttl(DynamodbTableTtl)
//  .writeCapacity(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#name DynamodbTable#name}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.attribute">attribute</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttribute">DynamodbTableAttribute</a>></code> | attribute block. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.billingMode">billingMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#billing_mode DynamodbTable#billing_mode}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#deletion_protection_enabled DynamodbTable#deletion_protection_enabled}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.globalSecondaryIndex">globalSecondaryIndex</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex">DynamodbTableGlobalSecondaryIndex</a>></code> | global_secondary_index block. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.hashKey">hashKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#hash_key DynamodbTable#hash_key}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#id DynamodbTable#id}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.importTable">importTable</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTable">DynamodbTableImportTable</a></code> | import_table block. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.localSecondaryIndex">localSecondaryIndex</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndex">DynamodbTableLocalSecondaryIndex</a>></code> | local_secondary_index block. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.onDemandThroughput">onDemandThroughput</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughput">DynamodbTableOnDemandThroughput</a></code> | on_demand_throughput block. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.pointInTimeRecovery">pointInTimeRecovery</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecovery">DynamodbTablePointInTimeRecovery</a></code> | point_in_time_recovery block. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.rangeKey">rangeKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#range_key DynamodbTable#range_key}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.readCapacity">readCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#read_capacity DynamodbTable#read_capacity}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.replica">replica</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica">DynamodbTableReplica</a>></code> | replica block. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.restoreDateTime">restoreDateTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#restore_date_time DynamodbTable#restore_date_time}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.restoreSourceName">restoreSourceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#restore_source_name DynamodbTable#restore_source_name}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.restoreSourceTableArn">restoreSourceTableArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#restore_source_table_arn DynamodbTable#restore_source_table_arn}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.restoreToLatestTime">restoreToLatestTime</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#restore_to_latest_time DynamodbTable#restore_to_latest_time}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.serverSideEncryption">serverSideEncryption</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryption">DynamodbTableServerSideEncryption</a></code> | server_side_encryption block. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.streamEnabled">streamEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#stream_enabled DynamodbTable#stream_enabled}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.streamViewType">streamViewType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#stream_view_type DynamodbTable#stream_view_type}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.tableClass">tableClass</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#table_class DynamodbTable#table_class}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#tags DynamodbTable#tags}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#tags_all DynamodbTable#tags_all}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeouts">DynamodbTableTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.ttl">ttl</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtl">DynamodbTableTtl</a></code> | ttl block. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.writeCapacity">writeCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#write_capacity DynamodbTable#write_capacity}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#name DynamodbTable#name}.

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.attribute"></a>

```java
public java.lang.Object getAttribute();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttribute">DynamodbTableAttribute</a>>

attribute block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#attribute DynamodbTable#attribute}

---

##### `billingMode`<sup>Optional</sup> <a name="billingMode" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.billingMode"></a>

```java
public java.lang.String getBillingMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#billing_mode DynamodbTable#billing_mode}.

---

##### `deletionProtectionEnabled`<sup>Optional</sup> <a name="deletionProtectionEnabled" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.deletionProtectionEnabled"></a>

```java
public java.lang.Object getDeletionProtectionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#deletion_protection_enabled DynamodbTable#deletion_protection_enabled}.

---

##### `globalSecondaryIndex`<sup>Optional</sup> <a name="globalSecondaryIndex" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.globalSecondaryIndex"></a>

```java
public java.lang.Object getGlobalSecondaryIndex();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex">DynamodbTableGlobalSecondaryIndex</a>>

global_secondary_index block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#global_secondary_index DynamodbTable#global_secondary_index}

---

##### `hashKey`<sup>Optional</sup> <a name="hashKey" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.hashKey"></a>

```java
public java.lang.String getHashKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#hash_key DynamodbTable#hash_key}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#id DynamodbTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `importTable`<sup>Optional</sup> <a name="importTable" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.importTable"></a>

```java
public DynamodbTableImportTable getImportTable();
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTable">DynamodbTableImportTable</a>

import_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#import_table DynamodbTable#import_table}

---

##### `localSecondaryIndex`<sup>Optional</sup> <a name="localSecondaryIndex" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.localSecondaryIndex"></a>

```java
public java.lang.Object getLocalSecondaryIndex();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndex">DynamodbTableLocalSecondaryIndex</a>>

local_secondary_index block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#local_secondary_index DynamodbTable#local_secondary_index}

---

##### `onDemandThroughput`<sup>Optional</sup> <a name="onDemandThroughput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.onDemandThroughput"></a>

```java
public DynamodbTableOnDemandThroughput getOnDemandThroughput();
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughput">DynamodbTableOnDemandThroughput</a>

on_demand_throughput block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#on_demand_throughput DynamodbTable#on_demand_throughput}

---

##### `pointInTimeRecovery`<sup>Optional</sup> <a name="pointInTimeRecovery" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.pointInTimeRecovery"></a>

```java
public DynamodbTablePointInTimeRecovery getPointInTimeRecovery();
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecovery">DynamodbTablePointInTimeRecovery</a>

point_in_time_recovery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#point_in_time_recovery DynamodbTable#point_in_time_recovery}

---

##### `rangeKey`<sup>Optional</sup> <a name="rangeKey" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.rangeKey"></a>

```java
public java.lang.String getRangeKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#range_key DynamodbTable#range_key}.

---

##### `readCapacity`<sup>Optional</sup> <a name="readCapacity" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.readCapacity"></a>

```java
public java.lang.Number getReadCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#read_capacity DynamodbTable#read_capacity}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#region DynamodbTable#region}

---

##### `replica`<sup>Optional</sup> <a name="replica" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.replica"></a>

```java
public java.lang.Object getReplica();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica">DynamodbTableReplica</a>>

replica block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#replica DynamodbTable#replica}

---

##### `restoreDateTime`<sup>Optional</sup> <a name="restoreDateTime" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.restoreDateTime"></a>

```java
public java.lang.String getRestoreDateTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#restore_date_time DynamodbTable#restore_date_time}.

---

##### `restoreSourceName`<sup>Optional</sup> <a name="restoreSourceName" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.restoreSourceName"></a>

```java
public java.lang.String getRestoreSourceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#restore_source_name DynamodbTable#restore_source_name}.

---

##### `restoreSourceTableArn`<sup>Optional</sup> <a name="restoreSourceTableArn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.restoreSourceTableArn"></a>

```java
public java.lang.String getRestoreSourceTableArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#restore_source_table_arn DynamodbTable#restore_source_table_arn}.

---

##### `restoreToLatestTime`<sup>Optional</sup> <a name="restoreToLatestTime" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.restoreToLatestTime"></a>

```java
public java.lang.Object getRestoreToLatestTime();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#restore_to_latest_time DynamodbTable#restore_to_latest_time}.

---

##### `serverSideEncryption`<sup>Optional</sup> <a name="serverSideEncryption" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.serverSideEncryption"></a>

```java
public DynamodbTableServerSideEncryption getServerSideEncryption();
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryption">DynamodbTableServerSideEncryption</a>

server_side_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#server_side_encryption DynamodbTable#server_side_encryption}

---

##### `streamEnabled`<sup>Optional</sup> <a name="streamEnabled" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.streamEnabled"></a>

```java
public java.lang.Object getStreamEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#stream_enabled DynamodbTable#stream_enabled}.

---

##### `streamViewType`<sup>Optional</sup> <a name="streamViewType" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.streamViewType"></a>

```java
public java.lang.String getStreamViewType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#stream_view_type DynamodbTable#stream_view_type}.

---

##### `tableClass`<sup>Optional</sup> <a name="tableClass" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.tableClass"></a>

```java
public java.lang.String getTableClass();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#table_class DynamodbTable#table_class}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#tags DynamodbTable#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#tags_all DynamodbTable#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.timeouts"></a>

```java
public DynamodbTableTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeouts">DynamodbTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#timeouts DynamodbTable#timeouts}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.ttl"></a>

```java
public DynamodbTableTtl getTtl();
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtl">DynamodbTableTtl</a>

ttl block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#ttl DynamodbTable#ttl}

---

##### `writeCapacity`<sup>Optional</sup> <a name="writeCapacity" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.writeCapacity"></a>

```java
public java.lang.Number getWriteCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#write_capacity DynamodbTable#write_capacity}.

---

### DynamodbTableGlobalSecondaryIndex <a name="DynamodbTableGlobalSecondaryIndex" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dynamodb_table.DynamodbTableGlobalSecondaryIndex;

DynamodbTableGlobalSecondaryIndex.builder()
    .hashKey(java.lang.String)
    .name(java.lang.String)
    .projectionType(java.lang.String)
//  .nonKeyAttributes(java.util.List<java.lang.String>)
//  .onDemandThroughput(DynamodbTableGlobalSecondaryIndexOnDemandThroughput)
//  .rangeKey(java.lang.String)
//  .readCapacity(java.lang.Number)
//  .writeCapacity(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.property.hashKey">hashKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#hash_key DynamodbTable#hash_key}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#name DynamodbTable#name}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.property.projectionType">projectionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#projection_type DynamodbTable#projection_type}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.property.nonKeyAttributes">nonKeyAttributes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#non_key_attributes DynamodbTable#non_key_attributes}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.property.onDemandThroughput">onDemandThroughput</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughput">DynamodbTableGlobalSecondaryIndexOnDemandThroughput</a></code> | on_demand_throughput block. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.property.rangeKey">rangeKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#range_key DynamodbTable#range_key}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.property.readCapacity">readCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#read_capacity DynamodbTable#read_capacity}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.property.writeCapacity">writeCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#write_capacity DynamodbTable#write_capacity}. |

---

##### `hashKey`<sup>Required</sup> <a name="hashKey" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.property.hashKey"></a>

```java
public java.lang.String getHashKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#hash_key DynamodbTable#hash_key}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#name DynamodbTable#name}.

---

##### `projectionType`<sup>Required</sup> <a name="projectionType" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.property.projectionType"></a>

```java
public java.lang.String getProjectionType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#projection_type DynamodbTable#projection_type}.

---

##### `nonKeyAttributes`<sup>Optional</sup> <a name="nonKeyAttributes" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.property.nonKeyAttributes"></a>

```java
public java.util.List<java.lang.String> getNonKeyAttributes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#non_key_attributes DynamodbTable#non_key_attributes}.

---

##### `onDemandThroughput`<sup>Optional</sup> <a name="onDemandThroughput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.property.onDemandThroughput"></a>

```java
public DynamodbTableGlobalSecondaryIndexOnDemandThroughput getOnDemandThroughput();
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughput">DynamodbTableGlobalSecondaryIndexOnDemandThroughput</a>

on_demand_throughput block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#on_demand_throughput DynamodbTable#on_demand_throughput}

---

##### `rangeKey`<sup>Optional</sup> <a name="rangeKey" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.property.rangeKey"></a>

```java
public java.lang.String getRangeKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#range_key DynamodbTable#range_key}.

---

##### `readCapacity`<sup>Optional</sup> <a name="readCapacity" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.property.readCapacity"></a>

```java
public java.lang.Number getReadCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#read_capacity DynamodbTable#read_capacity}.

---

##### `writeCapacity`<sup>Optional</sup> <a name="writeCapacity" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.property.writeCapacity"></a>

```java
public java.lang.Number getWriteCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#write_capacity DynamodbTable#write_capacity}.

---

### DynamodbTableGlobalSecondaryIndexOnDemandThroughput <a name="DynamodbTableGlobalSecondaryIndexOnDemandThroughput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughput.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dynamodb_table.DynamodbTableGlobalSecondaryIndexOnDemandThroughput;

DynamodbTableGlobalSecondaryIndexOnDemandThroughput.builder()
//  .maxReadRequestUnits(java.lang.Number)
//  .maxWriteRequestUnits(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughput.property.maxReadRequestUnits">maxReadRequestUnits</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#max_read_request_units DynamodbTable#max_read_request_units}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughput.property.maxWriteRequestUnits">maxWriteRequestUnits</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#max_write_request_units DynamodbTable#max_write_request_units}. |

---

##### `maxReadRequestUnits`<sup>Optional</sup> <a name="maxReadRequestUnits" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughput.property.maxReadRequestUnits"></a>

```java
public java.lang.Number getMaxReadRequestUnits();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#max_read_request_units DynamodbTable#max_read_request_units}.

---

##### `maxWriteRequestUnits`<sup>Optional</sup> <a name="maxWriteRequestUnits" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughput.property.maxWriteRequestUnits"></a>

```java
public java.lang.Number getMaxWriteRequestUnits();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#max_write_request_units DynamodbTable#max_write_request_units}.

---

### DynamodbTableImportTable <a name="DynamodbTableImportTable" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTable.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dynamodb_table.DynamodbTableImportTable;

DynamodbTableImportTable.builder()
    .inputFormat(java.lang.String)
    .s3BucketSource(DynamodbTableImportTableS3BucketSource)
//  .inputCompressionType(java.lang.String)
//  .inputFormatOptions(DynamodbTableImportTableInputFormatOptions)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTable.property.inputFormat">inputFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#input_format DynamodbTable#input_format}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTable.property.s3BucketSource">s3BucketSource</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSource">DynamodbTableImportTableS3BucketSource</a></code> | s3_bucket_source block. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTable.property.inputCompressionType">inputCompressionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#input_compression_type DynamodbTable#input_compression_type}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTable.property.inputFormatOptions">inputFormatOptions</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptions">DynamodbTableImportTableInputFormatOptions</a></code> | input_format_options block. |

---

##### `inputFormat`<sup>Required</sup> <a name="inputFormat" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTable.property.inputFormat"></a>

```java
public java.lang.String getInputFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#input_format DynamodbTable#input_format}.

---

##### `s3BucketSource`<sup>Required</sup> <a name="s3BucketSource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTable.property.s3BucketSource"></a>

```java
public DynamodbTableImportTableS3BucketSource getS3BucketSource();
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSource">DynamodbTableImportTableS3BucketSource</a>

s3_bucket_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#s3_bucket_source DynamodbTable#s3_bucket_source}

---

##### `inputCompressionType`<sup>Optional</sup> <a name="inputCompressionType" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTable.property.inputCompressionType"></a>

```java
public java.lang.String getInputCompressionType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#input_compression_type DynamodbTable#input_compression_type}.

---

##### `inputFormatOptions`<sup>Optional</sup> <a name="inputFormatOptions" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTable.property.inputFormatOptions"></a>

```java
public DynamodbTableImportTableInputFormatOptions getInputFormatOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptions">DynamodbTableImportTableInputFormatOptions</a>

input_format_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#input_format_options DynamodbTable#input_format_options}

---

### DynamodbTableImportTableInputFormatOptions <a name="DynamodbTableImportTableInputFormatOptions" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dynamodb_table.DynamodbTableImportTableInputFormatOptions;

DynamodbTableImportTableInputFormatOptions.builder()
//  .csv(DynamodbTableImportTableInputFormatOptionsCsv)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptions.property.csv">csv</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsv">DynamodbTableImportTableInputFormatOptionsCsv</a></code> | csv block. |

---

##### `csv`<sup>Optional</sup> <a name="csv" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptions.property.csv"></a>

```java
public DynamodbTableImportTableInputFormatOptionsCsv getCsv();
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsv">DynamodbTableImportTableInputFormatOptionsCsv</a>

csv block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#csv DynamodbTable#csv}

---

### DynamodbTableImportTableInputFormatOptionsCsv <a name="DynamodbTableImportTableInputFormatOptionsCsv" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsv"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsv.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dynamodb_table.DynamodbTableImportTableInputFormatOptionsCsv;

DynamodbTableImportTableInputFormatOptionsCsv.builder()
//  .delimiter(java.lang.String)
//  .headerList(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsv.property.delimiter">delimiter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#delimiter DynamodbTable#delimiter}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsv.property.headerList">headerList</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#header_list DynamodbTable#header_list}. |

---

##### `delimiter`<sup>Optional</sup> <a name="delimiter" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsv.property.delimiter"></a>

```java
public java.lang.String getDelimiter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#delimiter DynamodbTable#delimiter}.

---

##### `headerList`<sup>Optional</sup> <a name="headerList" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsv.property.headerList"></a>

```java
public java.util.List<java.lang.String> getHeaderList();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#header_list DynamodbTable#header_list}.

---

### DynamodbTableImportTableS3BucketSource <a name="DynamodbTableImportTableS3BucketSource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dynamodb_table.DynamodbTableImportTableS3BucketSource;

DynamodbTableImportTableS3BucketSource.builder()
    .bucket(java.lang.String)
//  .bucketOwner(java.lang.String)
//  .keyPrefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSource.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#bucket DynamodbTable#bucket}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSource.property.bucketOwner">bucketOwner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#bucket_owner DynamodbTable#bucket_owner}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSource.property.keyPrefix">keyPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#key_prefix DynamodbTable#key_prefix}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSource.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#bucket DynamodbTable#bucket}.

---

##### `bucketOwner`<sup>Optional</sup> <a name="bucketOwner" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSource.property.bucketOwner"></a>

```java
public java.lang.String getBucketOwner();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#bucket_owner DynamodbTable#bucket_owner}.

---

##### `keyPrefix`<sup>Optional</sup> <a name="keyPrefix" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSource.property.keyPrefix"></a>

```java
public java.lang.String getKeyPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#key_prefix DynamodbTable#key_prefix}.

---

### DynamodbTableLocalSecondaryIndex <a name="DynamodbTableLocalSecondaryIndex" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndex"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndex.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dynamodb_table.DynamodbTableLocalSecondaryIndex;

DynamodbTableLocalSecondaryIndex.builder()
    .name(java.lang.String)
    .projectionType(java.lang.String)
    .rangeKey(java.lang.String)
//  .nonKeyAttributes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndex.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#name DynamodbTable#name}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndex.property.projectionType">projectionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#projection_type DynamodbTable#projection_type}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndex.property.rangeKey">rangeKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#range_key DynamodbTable#range_key}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndex.property.nonKeyAttributes">nonKeyAttributes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#non_key_attributes DynamodbTable#non_key_attributes}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndex.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#name DynamodbTable#name}.

---

##### `projectionType`<sup>Required</sup> <a name="projectionType" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndex.property.projectionType"></a>

```java
public java.lang.String getProjectionType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#projection_type DynamodbTable#projection_type}.

---

##### `rangeKey`<sup>Required</sup> <a name="rangeKey" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndex.property.rangeKey"></a>

```java
public java.lang.String getRangeKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#range_key DynamodbTable#range_key}.

---

##### `nonKeyAttributes`<sup>Optional</sup> <a name="nonKeyAttributes" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndex.property.nonKeyAttributes"></a>

```java
public java.util.List<java.lang.String> getNonKeyAttributes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#non_key_attributes DynamodbTable#non_key_attributes}.

---

### DynamodbTableOnDemandThroughput <a name="DynamodbTableOnDemandThroughput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughput.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dynamodb_table.DynamodbTableOnDemandThroughput;

DynamodbTableOnDemandThroughput.builder()
//  .maxReadRequestUnits(java.lang.Number)
//  .maxWriteRequestUnits(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughput.property.maxReadRequestUnits">maxReadRequestUnits</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#max_read_request_units DynamodbTable#max_read_request_units}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughput.property.maxWriteRequestUnits">maxWriteRequestUnits</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#max_write_request_units DynamodbTable#max_write_request_units}. |

---

##### `maxReadRequestUnits`<sup>Optional</sup> <a name="maxReadRequestUnits" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughput.property.maxReadRequestUnits"></a>

```java
public java.lang.Number getMaxReadRequestUnits();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#max_read_request_units DynamodbTable#max_read_request_units}.

---

##### `maxWriteRequestUnits`<sup>Optional</sup> <a name="maxWriteRequestUnits" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughput.property.maxWriteRequestUnits"></a>

```java
public java.lang.Number getMaxWriteRequestUnits();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#max_write_request_units DynamodbTable#max_write_request_units}.

---

### DynamodbTablePointInTimeRecovery <a name="DynamodbTablePointInTimeRecovery" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecovery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecovery.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dynamodb_table.DynamodbTablePointInTimeRecovery;

DynamodbTablePointInTimeRecovery.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
//  .recoveryPeriodInDays(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecovery.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#enabled DynamodbTable#enabled}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecovery.property.recoveryPeriodInDays">recoveryPeriodInDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#recovery_period_in_days DynamodbTable#recovery_period_in_days}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecovery.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#enabled DynamodbTable#enabled}.

---

##### `recoveryPeriodInDays`<sup>Optional</sup> <a name="recoveryPeriodInDays" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecovery.property.recoveryPeriodInDays"></a>

```java
public java.lang.Number getRecoveryPeriodInDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#recovery_period_in_days DynamodbTable#recovery_period_in_days}.

---

### DynamodbTableReplica <a name="DynamodbTableReplica" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dynamodb_table.DynamodbTableReplica;

DynamodbTableReplica.builder()
    .regionName(java.lang.String)
//  .consistencyMode(java.lang.String)
//  .kmsKeyArn(java.lang.String)
//  .pointInTimeRecovery(java.lang.Boolean)
//  .pointInTimeRecovery(IResolvable)
//  .propagateTags(java.lang.Boolean)
//  .propagateTags(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica.property.regionName">regionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#region_name DynamodbTable#region_name}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica.property.consistencyMode">consistencyMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#consistency_mode DynamodbTable#consistency_mode}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#kms_key_arn DynamodbTable#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica.property.pointInTimeRecovery">pointInTimeRecovery</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#point_in_time_recovery DynamodbTable#point_in_time_recovery}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica.property.propagateTags">propagateTags</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#propagate_tags DynamodbTable#propagate_tags}. |

---

##### `regionName`<sup>Required</sup> <a name="regionName" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica.property.regionName"></a>

```java
public java.lang.String getRegionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#region_name DynamodbTable#region_name}.

---

##### `consistencyMode`<sup>Optional</sup> <a name="consistencyMode" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica.property.consistencyMode"></a>

```java
public java.lang.String getConsistencyMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#consistency_mode DynamodbTable#consistency_mode}.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#kms_key_arn DynamodbTable#kms_key_arn}.

---

##### `pointInTimeRecovery`<sup>Optional</sup> <a name="pointInTimeRecovery" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica.property.pointInTimeRecovery"></a>

```java
public java.lang.Object getPointInTimeRecovery();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#point_in_time_recovery DynamodbTable#point_in_time_recovery}.

---

##### `propagateTags`<sup>Optional</sup> <a name="propagateTags" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica.property.propagateTags"></a>

```java
public java.lang.Object getPropagateTags();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#propagate_tags DynamodbTable#propagate_tags}.

---

### DynamodbTableServerSideEncryption <a name="DynamodbTableServerSideEncryption" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryption.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dynamodb_table.DynamodbTableServerSideEncryption;

DynamodbTableServerSideEncryption.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
//  .kmsKeyArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryption.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#enabled DynamodbTable#enabled}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryption.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#kms_key_arn DynamodbTable#kms_key_arn}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryption.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#enabled DynamodbTable#enabled}.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryption.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#kms_key_arn DynamodbTable#kms_key_arn}.

---

### DynamodbTableTimeouts <a name="DynamodbTableTimeouts" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dynamodb_table.DynamodbTableTimeouts;

DynamodbTableTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#create DynamodbTable#create}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#delete DynamodbTable#delete}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#update DynamodbTable#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#create DynamodbTable#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#delete DynamodbTable#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#update DynamodbTable#update}.

---

### DynamodbTableTtl <a name="DynamodbTableTtl" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtl.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dynamodb_table.DynamodbTableTtl;

DynamodbTableTtl.builder()
//  .attributeName(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtl.property.attributeName">attributeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#attribute_name DynamodbTable#attribute_name}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtl.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#enabled DynamodbTable#enabled}. |

---

##### `attributeName`<sup>Optional</sup> <a name="attributeName" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtl.property.attributeName"></a>

```java
public java.lang.String getAttributeName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#attribute_name DynamodbTable#attribute_name}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtl.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dynamodb_table#enabled DynamodbTable#enabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### DynamodbTableAttributeList <a name="DynamodbTableAttributeList" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dynamodb_table.DynamodbTableAttributeList;

new DynamodbTableAttributeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.get"></a>

```java
public DynamodbTableAttributeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttribute">DynamodbTableAttribute</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttribute">DynamodbTableAttribute</a>>

---


### DynamodbTableAttributeOutputReference <a name="DynamodbTableAttributeOutputReference" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dynamodb_table.DynamodbTableAttributeOutputReference;

new DynamodbTableAttributeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttribute">DynamodbTableAttribute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttribute">DynamodbTableAttribute</a>

---


### DynamodbTableGlobalSecondaryIndexList <a name="DynamodbTableGlobalSecondaryIndexList" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dynamodb_table.DynamodbTableGlobalSecondaryIndexList;

new DynamodbTableGlobalSecondaryIndexList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.get"></a>

```java
public DynamodbTableGlobalSecondaryIndexOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex">DynamodbTableGlobalSecondaryIndex</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex">DynamodbTableGlobalSecondaryIndex</a>>

---


### DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference <a name="DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dynamodb_table.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference;

new DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.resetMaxReadRequestUnits">resetMaxReadRequestUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.resetMaxWriteRequestUnits">resetMaxWriteRequestUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxReadRequestUnits` <a name="resetMaxReadRequestUnits" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.resetMaxReadRequestUnits"></a>

```java
public void resetMaxReadRequestUnits()
```

##### `resetMaxWriteRequestUnits` <a name="resetMaxWriteRequestUnits" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.resetMaxWriteRequestUnits"></a>

```java
public void resetMaxWriteRequestUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.property.maxReadRequestUnitsInput">maxReadRequestUnitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.property.maxWriteRequestUnitsInput">maxWriteRequestUnitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.property.maxReadRequestUnits">maxReadRequestUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.property.maxWriteRequestUnits">maxWriteRequestUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughput">DynamodbTableGlobalSecondaryIndexOnDemandThroughput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxReadRequestUnitsInput`<sup>Optional</sup> <a name="maxReadRequestUnitsInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.property.maxReadRequestUnitsInput"></a>

```java
public java.lang.Number getMaxReadRequestUnitsInput();
```

- *Type:* java.lang.Number

---

##### `maxWriteRequestUnitsInput`<sup>Optional</sup> <a name="maxWriteRequestUnitsInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.property.maxWriteRequestUnitsInput"></a>

```java
public java.lang.Number getMaxWriteRequestUnitsInput();
```

- *Type:* java.lang.Number

---

##### `maxReadRequestUnits`<sup>Required</sup> <a name="maxReadRequestUnits" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.property.maxReadRequestUnits"></a>

```java
public java.lang.Number getMaxReadRequestUnits();
```

- *Type:* java.lang.Number

---

##### `maxWriteRequestUnits`<sup>Required</sup> <a name="maxWriteRequestUnits" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.property.maxWriteRequestUnits"></a>

```java
public java.lang.Number getMaxWriteRequestUnits();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference.property.internalValue"></a>

```java
public DynamodbTableGlobalSecondaryIndexOnDemandThroughput getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughput">DynamodbTableGlobalSecondaryIndexOnDemandThroughput</a>

---


### DynamodbTableGlobalSecondaryIndexOutputReference <a name="DynamodbTableGlobalSecondaryIndexOutputReference" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dynamodb_table.DynamodbTableGlobalSecondaryIndexOutputReference;

new DynamodbTableGlobalSecondaryIndexOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.putOnDemandThroughput">putOnDemandThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.resetNonKeyAttributes">resetNonKeyAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.resetOnDemandThroughput">resetOnDemandThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.resetRangeKey">resetRangeKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.resetReadCapacity">resetReadCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.resetWriteCapacity">resetWriteCapacity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOnDemandThroughput` <a name="putOnDemandThroughput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.putOnDemandThroughput"></a>

```java
public void putOnDemandThroughput(DynamodbTableGlobalSecondaryIndexOnDemandThroughput value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.putOnDemandThroughput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughput">DynamodbTableGlobalSecondaryIndexOnDemandThroughput</a>

---

##### `resetNonKeyAttributes` <a name="resetNonKeyAttributes" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.resetNonKeyAttributes"></a>

```java
public void resetNonKeyAttributes()
```

##### `resetOnDemandThroughput` <a name="resetOnDemandThroughput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.resetOnDemandThroughput"></a>

```java
public void resetOnDemandThroughput()
```

##### `resetRangeKey` <a name="resetRangeKey" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.resetRangeKey"></a>

```java
public void resetRangeKey()
```

##### `resetReadCapacity` <a name="resetReadCapacity" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.resetReadCapacity"></a>

```java
public void resetReadCapacity()
```

##### `resetWriteCapacity` <a name="resetWriteCapacity" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.resetWriteCapacity"></a>

```java
public void resetWriteCapacity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.onDemandThroughput">onDemandThroughput</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference">DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.hashKeyInput">hashKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.nonKeyAttributesInput">nonKeyAttributesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.onDemandThroughputInput">onDemandThroughputInput</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughput">DynamodbTableGlobalSecondaryIndexOnDemandThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.projectionTypeInput">projectionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.rangeKeyInput">rangeKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.readCapacityInput">readCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.writeCapacityInput">writeCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.hashKey">hashKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.nonKeyAttributes">nonKeyAttributes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.projectionType">projectionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.rangeKey">rangeKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.readCapacity">readCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.writeCapacity">writeCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex">DynamodbTableGlobalSecondaryIndex</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `onDemandThroughput`<sup>Required</sup> <a name="onDemandThroughput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.onDemandThroughput"></a>

```java
public DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference getOnDemandThroughput();
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference">DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference</a>

---

##### `hashKeyInput`<sup>Optional</sup> <a name="hashKeyInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.hashKeyInput"></a>

```java
public java.lang.String getHashKeyInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nonKeyAttributesInput`<sup>Optional</sup> <a name="nonKeyAttributesInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.nonKeyAttributesInput"></a>

```java
public java.util.List<java.lang.String> getNonKeyAttributesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `onDemandThroughputInput`<sup>Optional</sup> <a name="onDemandThroughputInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.onDemandThroughputInput"></a>

```java
public DynamodbTableGlobalSecondaryIndexOnDemandThroughput getOnDemandThroughputInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOnDemandThroughput">DynamodbTableGlobalSecondaryIndexOnDemandThroughput</a>

---

##### `projectionTypeInput`<sup>Optional</sup> <a name="projectionTypeInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.projectionTypeInput"></a>

```java
public java.lang.String getProjectionTypeInput();
```

- *Type:* java.lang.String

---

##### `rangeKeyInput`<sup>Optional</sup> <a name="rangeKeyInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.rangeKeyInput"></a>

```java
public java.lang.String getRangeKeyInput();
```

- *Type:* java.lang.String

---

##### `readCapacityInput`<sup>Optional</sup> <a name="readCapacityInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.readCapacityInput"></a>

```java
public java.lang.Number getReadCapacityInput();
```

- *Type:* java.lang.Number

---

##### `writeCapacityInput`<sup>Optional</sup> <a name="writeCapacityInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.writeCapacityInput"></a>

```java
public java.lang.Number getWriteCapacityInput();
```

- *Type:* java.lang.Number

---

##### `hashKey`<sup>Required</sup> <a name="hashKey" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.hashKey"></a>

```java
public java.lang.String getHashKey();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nonKeyAttributes`<sup>Required</sup> <a name="nonKeyAttributes" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.nonKeyAttributes"></a>

```java
public java.util.List<java.lang.String> getNonKeyAttributes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `projectionType`<sup>Required</sup> <a name="projectionType" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.projectionType"></a>

```java
public java.lang.String getProjectionType();
```

- *Type:* java.lang.String

---

##### `rangeKey`<sup>Required</sup> <a name="rangeKey" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.rangeKey"></a>

```java
public java.lang.String getRangeKey();
```

- *Type:* java.lang.String

---

##### `readCapacity`<sup>Required</sup> <a name="readCapacity" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.readCapacity"></a>

```java
public java.lang.Number getReadCapacity();
```

- *Type:* java.lang.Number

---

##### `writeCapacity`<sup>Required</sup> <a name="writeCapacity" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.writeCapacity"></a>

```java
public java.lang.Number getWriteCapacity();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex">DynamodbTableGlobalSecondaryIndex</a>

---


### DynamodbTableImportTableInputFormatOptionsCsvOutputReference <a name="DynamodbTableImportTableInputFormatOptionsCsvOutputReference" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dynamodb_table.DynamodbTableImportTableInputFormatOptionsCsvOutputReference;

new DynamodbTableImportTableInputFormatOptionsCsvOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.resetDelimiter">resetDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.resetHeaderList">resetHeaderList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDelimiter` <a name="resetDelimiter" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.resetDelimiter"></a>

```java
public void resetDelimiter()
```

##### `resetHeaderList` <a name="resetHeaderList" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.resetHeaderList"></a>

```java
public void resetHeaderList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.property.delimiterInput">delimiterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.property.headerListInput">headerListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.property.delimiter">delimiter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.property.headerList">headerList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsv">DynamodbTableImportTableInputFormatOptionsCsv</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `delimiterInput`<sup>Optional</sup> <a name="delimiterInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.property.delimiterInput"></a>

```java
public java.lang.String getDelimiterInput();
```

- *Type:* java.lang.String

---

##### `headerListInput`<sup>Optional</sup> <a name="headerListInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.property.headerListInput"></a>

```java
public java.util.List<java.lang.String> getHeaderListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `delimiter`<sup>Required</sup> <a name="delimiter" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.property.delimiter"></a>

```java
public java.lang.String getDelimiter();
```

- *Type:* java.lang.String

---

##### `headerList`<sup>Required</sup> <a name="headerList" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.property.headerList"></a>

```java
public java.util.List<java.lang.String> getHeaderList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference.property.internalValue"></a>

```java
public DynamodbTableImportTableInputFormatOptionsCsv getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsv">DynamodbTableImportTableInputFormatOptionsCsv</a>

---


### DynamodbTableImportTableInputFormatOptionsOutputReference <a name="DynamodbTableImportTableInputFormatOptionsOutputReference" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dynamodb_table.DynamodbTableImportTableInputFormatOptionsOutputReference;

new DynamodbTableImportTableInputFormatOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.putCsv">putCsv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.resetCsv">resetCsv</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCsv` <a name="putCsv" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.putCsv"></a>

```java
public void putCsv(DynamodbTableImportTableInputFormatOptionsCsv value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.putCsv.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsv">DynamodbTableImportTableInputFormatOptionsCsv</a>

---

##### `resetCsv` <a name="resetCsv" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.resetCsv"></a>

```java
public void resetCsv()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.property.csv">csv</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference">DynamodbTableImportTableInputFormatOptionsCsvOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.property.csvInput">csvInput</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsv">DynamodbTableImportTableInputFormatOptionsCsv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptions">DynamodbTableImportTableInputFormatOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `csv`<sup>Required</sup> <a name="csv" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.property.csv"></a>

```java
public DynamodbTableImportTableInputFormatOptionsCsvOutputReference getCsv();
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsvOutputReference">DynamodbTableImportTableInputFormatOptionsCsvOutputReference</a>

---

##### `csvInput`<sup>Optional</sup> <a name="csvInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.property.csvInput"></a>

```java
public DynamodbTableImportTableInputFormatOptionsCsv getCsvInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsCsv">DynamodbTableImportTableInputFormatOptionsCsv</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference.property.internalValue"></a>

```java
public DynamodbTableImportTableInputFormatOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptions">DynamodbTableImportTableInputFormatOptions</a>

---


### DynamodbTableImportTableOutputReference <a name="DynamodbTableImportTableOutputReference" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dynamodb_table.DynamodbTableImportTableOutputReference;

new DynamodbTableImportTableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.putInputFormatOptions">putInputFormatOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.putS3BucketSource">putS3BucketSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.resetInputCompressionType">resetInputCompressionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.resetInputFormatOptions">resetInputFormatOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInputFormatOptions` <a name="putInputFormatOptions" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.putInputFormatOptions"></a>

```java
public void putInputFormatOptions(DynamodbTableImportTableInputFormatOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.putInputFormatOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptions">DynamodbTableImportTableInputFormatOptions</a>

---

##### `putS3BucketSource` <a name="putS3BucketSource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.putS3BucketSource"></a>

```java
public void putS3BucketSource(DynamodbTableImportTableS3BucketSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.putS3BucketSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSource">DynamodbTableImportTableS3BucketSource</a>

---

##### `resetInputCompressionType` <a name="resetInputCompressionType" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.resetInputCompressionType"></a>

```java
public void resetInputCompressionType()
```

##### `resetInputFormatOptions` <a name="resetInputFormatOptions" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.resetInputFormatOptions"></a>

```java
public void resetInputFormatOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.property.inputFormatOptions">inputFormatOptions</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference">DynamodbTableImportTableInputFormatOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.property.s3BucketSource">s3BucketSource</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference">DynamodbTableImportTableS3BucketSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.property.inputCompressionTypeInput">inputCompressionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.property.inputFormatInput">inputFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.property.inputFormatOptionsInput">inputFormatOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptions">DynamodbTableImportTableInputFormatOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.property.s3BucketSourceInput">s3BucketSourceInput</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSource">DynamodbTableImportTableS3BucketSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.property.inputCompressionType">inputCompressionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.property.inputFormat">inputFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTable">DynamodbTableImportTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inputFormatOptions`<sup>Required</sup> <a name="inputFormatOptions" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.property.inputFormatOptions"></a>

```java
public DynamodbTableImportTableInputFormatOptionsOutputReference getInputFormatOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptionsOutputReference">DynamodbTableImportTableInputFormatOptionsOutputReference</a>

---

##### `s3BucketSource`<sup>Required</sup> <a name="s3BucketSource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.property.s3BucketSource"></a>

```java
public DynamodbTableImportTableS3BucketSourceOutputReference getS3BucketSource();
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference">DynamodbTableImportTableS3BucketSourceOutputReference</a>

---

##### `inputCompressionTypeInput`<sup>Optional</sup> <a name="inputCompressionTypeInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.property.inputCompressionTypeInput"></a>

```java
public java.lang.String getInputCompressionTypeInput();
```

- *Type:* java.lang.String

---

##### `inputFormatInput`<sup>Optional</sup> <a name="inputFormatInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.property.inputFormatInput"></a>

```java
public java.lang.String getInputFormatInput();
```

- *Type:* java.lang.String

---

##### `inputFormatOptionsInput`<sup>Optional</sup> <a name="inputFormatOptionsInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.property.inputFormatOptionsInput"></a>

```java
public DynamodbTableImportTableInputFormatOptions getInputFormatOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableInputFormatOptions">DynamodbTableImportTableInputFormatOptions</a>

---

##### `s3BucketSourceInput`<sup>Optional</sup> <a name="s3BucketSourceInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.property.s3BucketSourceInput"></a>

```java
public DynamodbTableImportTableS3BucketSource getS3BucketSourceInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSource">DynamodbTableImportTableS3BucketSource</a>

---

##### `inputCompressionType`<sup>Required</sup> <a name="inputCompressionType" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.property.inputCompressionType"></a>

```java
public java.lang.String getInputCompressionType();
```

- *Type:* java.lang.String

---

##### `inputFormat`<sup>Required</sup> <a name="inputFormat" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.property.inputFormat"></a>

```java
public java.lang.String getInputFormat();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableOutputReference.property.internalValue"></a>

```java
public DynamodbTableImportTable getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTable">DynamodbTableImportTable</a>

---


### DynamodbTableImportTableS3BucketSourceOutputReference <a name="DynamodbTableImportTableS3BucketSourceOutputReference" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dynamodb_table.DynamodbTableImportTableS3BucketSourceOutputReference;

new DynamodbTableImportTableS3BucketSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.resetBucketOwner">resetBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.resetKeyPrefix">resetKeyPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketOwner` <a name="resetBucketOwner" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.resetBucketOwner"></a>

```java
public void resetBucketOwner()
```

##### `resetKeyPrefix` <a name="resetKeyPrefix" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.resetKeyPrefix"></a>

```java
public void resetKeyPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.property.bucketOwnerInput">bucketOwnerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.property.keyPrefixInput">keyPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.property.bucketOwner">bucketOwner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.property.keyPrefix">keyPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSource">DynamodbTableImportTableS3BucketSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `bucketOwnerInput`<sup>Optional</sup> <a name="bucketOwnerInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.property.bucketOwnerInput"></a>

```java
public java.lang.String getBucketOwnerInput();
```

- *Type:* java.lang.String

---

##### `keyPrefixInput`<sup>Optional</sup> <a name="keyPrefixInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.property.keyPrefixInput"></a>

```java
public java.lang.String getKeyPrefixInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `bucketOwner`<sup>Required</sup> <a name="bucketOwner" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.property.bucketOwner"></a>

```java
public java.lang.String getBucketOwner();
```

- *Type:* java.lang.String

---

##### `keyPrefix`<sup>Required</sup> <a name="keyPrefix" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.property.keyPrefix"></a>

```java
public java.lang.String getKeyPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSourceOutputReference.property.internalValue"></a>

```java
public DynamodbTableImportTableS3BucketSource getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableImportTableS3BucketSource">DynamodbTableImportTableS3BucketSource</a>

---


### DynamodbTableLocalSecondaryIndexList <a name="DynamodbTableLocalSecondaryIndexList" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dynamodb_table.DynamodbTableLocalSecondaryIndexList;

new DynamodbTableLocalSecondaryIndexList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.get"></a>

```java
public DynamodbTableLocalSecondaryIndexOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndex">DynamodbTableLocalSecondaryIndex</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndex">DynamodbTableLocalSecondaryIndex</a>>

---


### DynamodbTableLocalSecondaryIndexOutputReference <a name="DynamodbTableLocalSecondaryIndexOutputReference" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dynamodb_table.DynamodbTableLocalSecondaryIndexOutputReference;

new DynamodbTableLocalSecondaryIndexOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.resetNonKeyAttributes">resetNonKeyAttributes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNonKeyAttributes` <a name="resetNonKeyAttributes" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.resetNonKeyAttributes"></a>

```java
public void resetNonKeyAttributes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.nonKeyAttributesInput">nonKeyAttributesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.projectionTypeInput">projectionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.rangeKeyInput">rangeKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.nonKeyAttributes">nonKeyAttributes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.projectionType">projectionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.rangeKey">rangeKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndex">DynamodbTableLocalSecondaryIndex</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nonKeyAttributesInput`<sup>Optional</sup> <a name="nonKeyAttributesInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.nonKeyAttributesInput"></a>

```java
public java.util.List<java.lang.String> getNonKeyAttributesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `projectionTypeInput`<sup>Optional</sup> <a name="projectionTypeInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.projectionTypeInput"></a>

```java
public java.lang.String getProjectionTypeInput();
```

- *Type:* java.lang.String

---

##### `rangeKeyInput`<sup>Optional</sup> <a name="rangeKeyInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.rangeKeyInput"></a>

```java
public java.lang.String getRangeKeyInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nonKeyAttributes`<sup>Required</sup> <a name="nonKeyAttributes" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.nonKeyAttributes"></a>

```java
public java.util.List<java.lang.String> getNonKeyAttributes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `projectionType`<sup>Required</sup> <a name="projectionType" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.projectionType"></a>

```java
public java.lang.String getProjectionType();
```

- *Type:* java.lang.String

---

##### `rangeKey`<sup>Required</sup> <a name="rangeKey" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.rangeKey"></a>

```java
public java.lang.String getRangeKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndex">DynamodbTableLocalSecondaryIndex</a>

---


### DynamodbTableOnDemandThroughputOutputReference <a name="DynamodbTableOnDemandThroughputOutputReference" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dynamodb_table.DynamodbTableOnDemandThroughputOutputReference;

new DynamodbTableOnDemandThroughputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.resetMaxReadRequestUnits">resetMaxReadRequestUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.resetMaxWriteRequestUnits">resetMaxWriteRequestUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxReadRequestUnits` <a name="resetMaxReadRequestUnits" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.resetMaxReadRequestUnits"></a>

```java
public void resetMaxReadRequestUnits()
```

##### `resetMaxWriteRequestUnits` <a name="resetMaxWriteRequestUnits" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.resetMaxWriteRequestUnits"></a>

```java
public void resetMaxWriteRequestUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.maxReadRequestUnitsInput">maxReadRequestUnitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.maxWriteRequestUnitsInput">maxWriteRequestUnitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.maxReadRequestUnits">maxReadRequestUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.maxWriteRequestUnits">maxWriteRequestUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughput">DynamodbTableOnDemandThroughput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxReadRequestUnitsInput`<sup>Optional</sup> <a name="maxReadRequestUnitsInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.maxReadRequestUnitsInput"></a>

```java
public java.lang.Number getMaxReadRequestUnitsInput();
```

- *Type:* java.lang.Number

---

##### `maxWriteRequestUnitsInput`<sup>Optional</sup> <a name="maxWriteRequestUnitsInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.maxWriteRequestUnitsInput"></a>

```java
public java.lang.Number getMaxWriteRequestUnitsInput();
```

- *Type:* java.lang.Number

---

##### `maxReadRequestUnits`<sup>Required</sup> <a name="maxReadRequestUnits" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.maxReadRequestUnits"></a>

```java
public java.lang.Number getMaxReadRequestUnits();
```

- *Type:* java.lang.Number

---

##### `maxWriteRequestUnits`<sup>Required</sup> <a name="maxWriteRequestUnits" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.maxWriteRequestUnits"></a>

```java
public java.lang.Number getMaxWriteRequestUnits();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.internalValue"></a>

```java
public DynamodbTableOnDemandThroughput getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableOnDemandThroughput">DynamodbTableOnDemandThroughput</a>

---


### DynamodbTablePointInTimeRecoveryOutputReference <a name="DynamodbTablePointInTimeRecoveryOutputReference" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dynamodb_table.DynamodbTablePointInTimeRecoveryOutputReference;

new DynamodbTablePointInTimeRecoveryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.resetRecoveryPeriodInDays">resetRecoveryPeriodInDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRecoveryPeriodInDays` <a name="resetRecoveryPeriodInDays" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.resetRecoveryPeriodInDays"></a>

```java
public void resetRecoveryPeriodInDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.property.recoveryPeriodInDaysInput">recoveryPeriodInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.property.recoveryPeriodInDays">recoveryPeriodInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecovery">DynamodbTablePointInTimeRecovery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `recoveryPeriodInDaysInput`<sup>Optional</sup> <a name="recoveryPeriodInDaysInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.property.recoveryPeriodInDaysInput"></a>

```java
public java.lang.Number getRecoveryPeriodInDaysInput();
```

- *Type:* java.lang.Number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `recoveryPeriodInDays`<sup>Required</sup> <a name="recoveryPeriodInDays" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.property.recoveryPeriodInDays"></a>

```java
public java.lang.Number getRecoveryPeriodInDays();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.property.internalValue"></a>

```java
public DynamodbTablePointInTimeRecovery getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecovery">DynamodbTablePointInTimeRecovery</a>

---


### DynamodbTableReplicaList <a name="DynamodbTableReplicaList" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dynamodb_table.DynamodbTableReplicaList;

new DynamodbTableReplicaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.get"></a>

```java
public DynamodbTableReplicaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica">DynamodbTableReplica</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica">DynamodbTableReplica</a>>

---


### DynamodbTableReplicaOutputReference <a name="DynamodbTableReplicaOutputReference" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dynamodb_table.DynamodbTableReplicaOutputReference;

new DynamodbTableReplicaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.resetConsistencyMode">resetConsistencyMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.resetPointInTimeRecovery">resetPointInTimeRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.resetPropagateTags">resetPropagateTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConsistencyMode` <a name="resetConsistencyMode" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.resetConsistencyMode"></a>

```java
public void resetConsistencyMode()
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.resetKmsKeyArn"></a>

```java
public void resetKmsKeyArn()
```

##### `resetPointInTimeRecovery` <a name="resetPointInTimeRecovery" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.resetPointInTimeRecovery"></a>

```java
public void resetPointInTimeRecovery()
```

##### `resetPropagateTags` <a name="resetPropagateTags" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.resetPropagateTags"></a>

```java
public void resetPropagateTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.streamArn">streamArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.streamLabel">streamLabel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.consistencyModeInput">consistencyModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.pointInTimeRecoveryInput">pointInTimeRecoveryInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.propagateTagsInput">propagateTagsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.regionNameInput">regionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.consistencyMode">consistencyMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.pointInTimeRecovery">pointInTimeRecovery</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.propagateTags">propagateTags</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.regionName">regionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica">DynamodbTableReplica</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `streamArn`<sup>Required</sup> <a name="streamArn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.streamArn"></a>

```java
public java.lang.String getStreamArn();
```

- *Type:* java.lang.String

---

##### `streamLabel`<sup>Required</sup> <a name="streamLabel" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.streamLabel"></a>

```java
public java.lang.String getStreamLabel();
```

- *Type:* java.lang.String

---

##### `consistencyModeInput`<sup>Optional</sup> <a name="consistencyModeInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.consistencyModeInput"></a>

```java
public java.lang.String getConsistencyModeInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.kmsKeyArnInput"></a>

```java
public java.lang.String getKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `pointInTimeRecoveryInput`<sup>Optional</sup> <a name="pointInTimeRecoveryInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.pointInTimeRecoveryInput"></a>

```java
public java.lang.Object getPointInTimeRecoveryInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `propagateTagsInput`<sup>Optional</sup> <a name="propagateTagsInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.propagateTagsInput"></a>

```java
public java.lang.Object getPropagateTagsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `regionNameInput`<sup>Optional</sup> <a name="regionNameInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.regionNameInput"></a>

```java
public java.lang.String getRegionNameInput();
```

- *Type:* java.lang.String

---

##### `consistencyMode`<sup>Required</sup> <a name="consistencyMode" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.consistencyMode"></a>

```java
public java.lang.String getConsistencyMode();
```

- *Type:* java.lang.String

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `pointInTimeRecovery`<sup>Required</sup> <a name="pointInTimeRecovery" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.pointInTimeRecovery"></a>

```java
public java.lang.Object getPointInTimeRecovery();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `propagateTags`<sup>Required</sup> <a name="propagateTags" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.propagateTags"></a>

```java
public java.lang.Object getPropagateTags();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `regionName`<sup>Required</sup> <a name="regionName" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.regionName"></a>

```java
public java.lang.String getRegionName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica">DynamodbTableReplica</a>

---


### DynamodbTableServerSideEncryptionOutputReference <a name="DynamodbTableServerSideEncryptionOutputReference" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dynamodb_table.DynamodbTableServerSideEncryptionOutputReference;

new DynamodbTableServerSideEncryptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.resetKmsKeyArn"></a>

```java
public void resetKmsKeyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryption">DynamodbTableServerSideEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.property.kmsKeyArnInput"></a>

```java
public java.lang.String getKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.property.internalValue"></a>

```java
public DynamodbTableServerSideEncryption getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryption">DynamodbTableServerSideEncryption</a>

---


### DynamodbTableTimeoutsOutputReference <a name="DynamodbTableTimeoutsOutputReference" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dynamodb_table.DynamodbTableTimeoutsOutputReference;

new DynamodbTableTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeouts">DynamodbTableTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeouts">DynamodbTableTimeouts</a>

---


### DynamodbTableTtlOutputReference <a name="DynamodbTableTtlOutputReference" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dynamodb_table.DynamodbTableTtlOutputReference;

new DynamodbTableTtlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.resetAttributeName">resetAttributeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttributeName` <a name="resetAttributeName" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.resetAttributeName"></a>

```java
public void resetAttributeName()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.property.attributeNameInput">attributeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.property.attributeName">attributeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtl">DynamodbTableTtl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributeNameInput`<sup>Optional</sup> <a name="attributeNameInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.property.attributeNameInput"></a>

```java
public java.lang.String getAttributeNameInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `attributeName`<sup>Required</sup> <a name="attributeName" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.property.attributeName"></a>

```java
public java.lang.String getAttributeName();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.property.internalValue"></a>

```java
public DynamodbTableTtl getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtl">DynamodbTableTtl</a>

---



