# `dynamodbTable` Submodule <a name="`dynamodbTable` Submodule" id="@cdktf/provider-aws.dynamodbTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DynamodbTable <a name="DynamodbTable" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table aws_dynamodb_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dynamodb_table

dynamodbTable.DynamodbTable(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  attribute: typing.Union[IResolvable, typing.List[DynamodbTableAttribute]] = None,
  billing_mode: str = None,
  global_secondary_index: typing.Union[IResolvable, typing.List[DynamodbTableGlobalSecondaryIndex]] = None,
  hash_key: str = None,
  id: str = None,
  local_secondary_index: typing.Union[IResolvable, typing.List[DynamodbTableLocalSecondaryIndex]] = None,
  point_in_time_recovery: DynamodbTablePointInTimeRecovery = None,
  range_key: str = None,
  read_capacity: typing.Union[int, float] = None,
  replica: typing.Union[IResolvable, typing.List[DynamodbTableReplica]] = None,
  restore_date_time: str = None,
  restore_source_name: str = None,
  restore_to_latest_time: typing.Union[bool, IResolvable] = None,
  server_side_encryption: DynamodbTableServerSideEncryption = None,
  stream_enabled: typing.Union[bool, IResolvable] = None,
  stream_view_type: str = None,
  table_class: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: DynamodbTableTimeouts = None,
  ttl: DynamodbTableTtl = None,
  write_capacity: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#name DynamodbTable#name}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.attribute">attribute</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttribute">DynamodbTableAttribute</a>]]</code> | attribute block. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.billingMode">billing_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#billing_mode DynamodbTable#billing_mode}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.globalSecondaryIndex">global_secondary_index</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex">DynamodbTableGlobalSecondaryIndex</a>]]</code> | global_secondary_index block. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.hashKey">hash_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#hash_key DynamodbTable#hash_key}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#id DynamodbTable#id}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.localSecondaryIndex">local_secondary_index</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndex">DynamodbTableLocalSecondaryIndex</a>]]</code> | local_secondary_index block. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.pointInTimeRecovery">point_in_time_recovery</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecovery">DynamodbTablePointInTimeRecovery</a></code> | point_in_time_recovery block. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.rangeKey">range_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#range_key DynamodbTable#range_key}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.readCapacity">read_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#read_capacity DynamodbTable#read_capacity}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.replica">replica</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica">DynamodbTableReplica</a>]]</code> | replica block. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.restoreDateTime">restore_date_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#restore_date_time DynamodbTable#restore_date_time}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.restoreSourceName">restore_source_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#restore_source_name DynamodbTable#restore_source_name}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.restoreToLatestTime">restore_to_latest_time</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#restore_to_latest_time DynamodbTable#restore_to_latest_time}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.serverSideEncryption">server_side_encryption</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryption">DynamodbTableServerSideEncryption</a></code> | server_side_encryption block. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.streamEnabled">stream_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#stream_enabled DynamodbTable#stream_enabled}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.streamViewType">stream_view_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#stream_view_type DynamodbTable#stream_view_type}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.tableClass">table_class</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#table_class DynamodbTable#table_class}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#tags DynamodbTable#tags}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#tags_all DynamodbTable#tags_all}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeouts">DynamodbTableTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.ttl">ttl</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtl">DynamodbTableTtl</a></code> | ttl block. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.writeCapacity">write_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#write_capacity DynamodbTable#write_capacity}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#name DynamodbTable#name}.

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.attribute"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttribute">DynamodbTableAttribute</a>]]

attribute block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#attribute DynamodbTable#attribute}

---

##### `billing_mode`<sup>Optional</sup> <a name="billing_mode" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.billingMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#billing_mode DynamodbTable#billing_mode}.

---

##### `global_secondary_index`<sup>Optional</sup> <a name="global_secondary_index" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.globalSecondaryIndex"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex">DynamodbTableGlobalSecondaryIndex</a>]]

global_secondary_index block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#global_secondary_index DynamodbTable#global_secondary_index}

---

##### `hash_key`<sup>Optional</sup> <a name="hash_key" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.hashKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#hash_key DynamodbTable#hash_key}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#id DynamodbTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `local_secondary_index`<sup>Optional</sup> <a name="local_secondary_index" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.localSecondaryIndex"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndex">DynamodbTableLocalSecondaryIndex</a>]]

local_secondary_index block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#local_secondary_index DynamodbTable#local_secondary_index}

---

##### `point_in_time_recovery`<sup>Optional</sup> <a name="point_in_time_recovery" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.pointInTimeRecovery"></a>

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecovery">DynamodbTablePointInTimeRecovery</a>

point_in_time_recovery block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#point_in_time_recovery DynamodbTable#point_in_time_recovery}

---

##### `range_key`<sup>Optional</sup> <a name="range_key" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.rangeKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#range_key DynamodbTable#range_key}.

---

##### `read_capacity`<sup>Optional</sup> <a name="read_capacity" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.readCapacity"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#read_capacity DynamodbTable#read_capacity}.

---

##### `replica`<sup>Optional</sup> <a name="replica" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.replica"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica">DynamodbTableReplica</a>]]

replica block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#replica DynamodbTable#replica}

---

##### `restore_date_time`<sup>Optional</sup> <a name="restore_date_time" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.restoreDateTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#restore_date_time DynamodbTable#restore_date_time}.

---

##### `restore_source_name`<sup>Optional</sup> <a name="restore_source_name" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.restoreSourceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#restore_source_name DynamodbTable#restore_source_name}.

---

##### `restore_to_latest_time`<sup>Optional</sup> <a name="restore_to_latest_time" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.restoreToLatestTime"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#restore_to_latest_time DynamodbTable#restore_to_latest_time}.

---

##### `server_side_encryption`<sup>Optional</sup> <a name="server_side_encryption" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.serverSideEncryption"></a>

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryption">DynamodbTableServerSideEncryption</a>

server_side_encryption block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#server_side_encryption DynamodbTable#server_side_encryption}

---

##### `stream_enabled`<sup>Optional</sup> <a name="stream_enabled" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.streamEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#stream_enabled DynamodbTable#stream_enabled}.

---

##### `stream_view_type`<sup>Optional</sup> <a name="stream_view_type" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.streamViewType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#stream_view_type DynamodbTable#stream_view_type}.

---

##### `table_class`<sup>Optional</sup> <a name="table_class" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.tableClass"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#table_class DynamodbTable#table_class}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#tags DynamodbTable#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#tags_all DynamodbTable#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeouts">DynamodbTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#timeouts DynamodbTable#timeouts}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.ttl"></a>

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtl">DynamodbTableTtl</a>

ttl block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#ttl DynamodbTable#ttl}

---

##### `write_capacity`<sup>Optional</sup> <a name="write_capacity" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.writeCapacity"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#write_capacity DynamodbTable#write_capacity}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.putAttribute">put_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.putGlobalSecondaryIndex">put_global_secondary_index</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.putLocalSecondaryIndex">put_local_secondary_index</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.putPointInTimeRecovery">put_point_in_time_recovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.putReplica">put_replica</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.putServerSideEncryption">put_server_side_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.putTtl">put_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetAttribute">reset_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetBillingMode">reset_billing_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetGlobalSecondaryIndex">reset_global_secondary_index</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetHashKey">reset_hash_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetLocalSecondaryIndex">reset_local_secondary_index</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetPointInTimeRecovery">reset_point_in_time_recovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetRangeKey">reset_range_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetReadCapacity">reset_read_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetReplica">reset_replica</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetRestoreDateTime">reset_restore_date_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetRestoreSourceName">reset_restore_source_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetRestoreToLatestTime">reset_restore_to_latest_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetServerSideEncryption">reset_server_side_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetStreamEnabled">reset_stream_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetStreamViewType">reset_stream_view_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetTableClass">reset_table_class</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetTtl">reset_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetWriteCapacity">reset_write_capacity</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_attribute` <a name="put_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putAttribute"></a>

```python
def put_attribute(
  value: typing.Union[IResolvable, typing.List[DynamodbTableAttribute]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putAttribute.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttribute">DynamodbTableAttribute</a>]]

---

##### `put_global_secondary_index` <a name="put_global_secondary_index" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putGlobalSecondaryIndex"></a>

```python
def put_global_secondary_index(
  value: typing.Union[IResolvable, typing.List[DynamodbTableGlobalSecondaryIndex]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putGlobalSecondaryIndex.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex">DynamodbTableGlobalSecondaryIndex</a>]]

---

##### `put_local_secondary_index` <a name="put_local_secondary_index" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putLocalSecondaryIndex"></a>

```python
def put_local_secondary_index(
  value: typing.Union[IResolvable, typing.List[DynamodbTableLocalSecondaryIndex]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putLocalSecondaryIndex.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndex">DynamodbTableLocalSecondaryIndex</a>]]

---

##### `put_point_in_time_recovery` <a name="put_point_in_time_recovery" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putPointInTimeRecovery"></a>

```python
def put_point_in_time_recovery(
  enabled: typing.Union[bool, IResolvable]
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putPointInTimeRecovery.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#enabled DynamodbTable#enabled}.

---

##### `put_replica` <a name="put_replica" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putReplica"></a>

```python
def put_replica(
  value: typing.Union[IResolvable, typing.List[DynamodbTableReplica]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putReplica.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica">DynamodbTableReplica</a>]]

---

##### `put_server_side_encryption` <a name="put_server_side_encryption" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putServerSideEncryption"></a>

```python
def put_server_side_encryption(
  enabled: typing.Union[bool, IResolvable],
  kms_key_arn: str = None
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putServerSideEncryption.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#enabled DynamodbTable#enabled}.

---

###### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putServerSideEncryption.parameter.kmsKeyArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#kms_key_arn DynamodbTable#kms_key_arn}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#create DynamodbTable#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#delete DynamodbTable#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#update DynamodbTable#update}.

---

##### `put_ttl` <a name="put_ttl" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putTtl"></a>

```python
def put_ttl(
  attribute_name: str,
  enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `attribute_name`<sup>Required</sup> <a name="attribute_name" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putTtl.parameter.attributeName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#attribute_name DynamodbTable#attribute_name}.

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putTtl.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#enabled DynamodbTable#enabled}.

---

##### `reset_attribute` <a name="reset_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetAttribute"></a>

```python
def reset_attribute() -> None
```

##### `reset_billing_mode` <a name="reset_billing_mode" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetBillingMode"></a>

```python
def reset_billing_mode() -> None
```

##### `reset_global_secondary_index` <a name="reset_global_secondary_index" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetGlobalSecondaryIndex"></a>

```python
def reset_global_secondary_index() -> None
```

##### `reset_hash_key` <a name="reset_hash_key" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetHashKey"></a>

```python
def reset_hash_key() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_local_secondary_index` <a name="reset_local_secondary_index" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetLocalSecondaryIndex"></a>

```python
def reset_local_secondary_index() -> None
```

##### `reset_point_in_time_recovery` <a name="reset_point_in_time_recovery" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetPointInTimeRecovery"></a>

```python
def reset_point_in_time_recovery() -> None
```

##### `reset_range_key` <a name="reset_range_key" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetRangeKey"></a>

```python
def reset_range_key() -> None
```

##### `reset_read_capacity` <a name="reset_read_capacity" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetReadCapacity"></a>

```python
def reset_read_capacity() -> None
```

##### `reset_replica` <a name="reset_replica" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetReplica"></a>

```python
def reset_replica() -> None
```

##### `reset_restore_date_time` <a name="reset_restore_date_time" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetRestoreDateTime"></a>

```python
def reset_restore_date_time() -> None
```

##### `reset_restore_source_name` <a name="reset_restore_source_name" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetRestoreSourceName"></a>

```python
def reset_restore_source_name() -> None
```

##### `reset_restore_to_latest_time` <a name="reset_restore_to_latest_time" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetRestoreToLatestTime"></a>

```python
def reset_restore_to_latest_time() -> None
```

##### `reset_server_side_encryption` <a name="reset_server_side_encryption" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetServerSideEncryption"></a>

```python
def reset_server_side_encryption() -> None
```

##### `reset_stream_enabled` <a name="reset_stream_enabled" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetStreamEnabled"></a>

```python
def reset_stream_enabled() -> None
```

##### `reset_stream_view_type` <a name="reset_stream_view_type" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetStreamViewType"></a>

```python
def reset_stream_view_type() -> None
```

##### `reset_table_class` <a name="reset_table_class" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetTableClass"></a>

```python
def reset_table_class() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_ttl` <a name="reset_ttl" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetTtl"></a>

```python
def reset_ttl() -> None
```

##### `reset_write_capacity` <a name="reset_write_capacity" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetWriteCapacity"></a>

```python
def reset_write_capacity() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import dynamodb_table

dynamodbTable.DynamodbTable.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import dynamodb_table

dynamodbTable.DynamodbTable.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import dynamodb_table

dynamodbTable.DynamodbTable.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.attribute">attribute</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList">DynamodbTableAttributeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.globalSecondaryIndex">global_secondary_index</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList">DynamodbTableGlobalSecondaryIndexList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.localSecondaryIndex">local_secondary_index</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList">DynamodbTableLocalSecondaryIndexList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.pointInTimeRecovery">point_in_time_recovery</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference">DynamodbTablePointInTimeRecoveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.replica">replica</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList">DynamodbTableReplicaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.serverSideEncryption">server_side_encryption</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference">DynamodbTableServerSideEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.streamArn">stream_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.streamLabel">stream_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference">DynamodbTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.ttl">ttl</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference">DynamodbTableTtlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.attributeInput">attribute_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttribute">DynamodbTableAttribute</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.billingModeInput">billing_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.globalSecondaryIndexInput">global_secondary_index_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex">DynamodbTableGlobalSecondaryIndex</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.hashKeyInput">hash_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.localSecondaryIndexInput">local_secondary_index_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndex">DynamodbTableLocalSecondaryIndex</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.pointInTimeRecoveryInput">point_in_time_recovery_input</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecovery">DynamodbTablePointInTimeRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.rangeKeyInput">range_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.readCapacityInput">read_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.replicaInput">replica_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica">DynamodbTableReplica</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.restoreDateTimeInput">restore_date_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.restoreSourceNameInput">restore_source_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.restoreToLatestTimeInput">restore_to_latest_time_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.serverSideEncryptionInput">server_side_encryption_input</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryption">DynamodbTableServerSideEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.streamEnabledInput">stream_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.streamViewTypeInput">stream_view_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.tableClassInput">table_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeouts">DynamodbTableTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.ttlInput">ttl_input</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtl">DynamodbTableTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.writeCapacityInput">write_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.billingMode">billing_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.hashKey">hash_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.rangeKey">range_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.readCapacity">read_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.restoreDateTime">restore_date_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.restoreSourceName">restore_source_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.restoreToLatestTime">restore_to_latest_time</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.streamEnabled">stream_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.streamViewType">stream_view_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.tableClass">table_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.writeCapacity">write_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.attribute"></a>

```python
attribute: DynamodbTableAttributeList
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList">DynamodbTableAttributeList</a>

---

##### `global_secondary_index`<sup>Required</sup> <a name="global_secondary_index" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.globalSecondaryIndex"></a>

```python
global_secondary_index: DynamodbTableGlobalSecondaryIndexList
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList">DynamodbTableGlobalSecondaryIndexList</a>

---

##### `local_secondary_index`<sup>Required</sup> <a name="local_secondary_index" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.localSecondaryIndex"></a>

```python
local_secondary_index: DynamodbTableLocalSecondaryIndexList
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList">DynamodbTableLocalSecondaryIndexList</a>

---

##### `point_in_time_recovery`<sup>Required</sup> <a name="point_in_time_recovery" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.pointInTimeRecovery"></a>

```python
point_in_time_recovery: DynamodbTablePointInTimeRecoveryOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference">DynamodbTablePointInTimeRecoveryOutputReference</a>

---

##### `replica`<sup>Required</sup> <a name="replica" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.replica"></a>

```python
replica: DynamodbTableReplicaList
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList">DynamodbTableReplicaList</a>

---

##### `server_side_encryption`<sup>Required</sup> <a name="server_side_encryption" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.serverSideEncryption"></a>

```python
server_side_encryption: DynamodbTableServerSideEncryptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference">DynamodbTableServerSideEncryptionOutputReference</a>

---

##### `stream_arn`<sup>Required</sup> <a name="stream_arn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.streamArn"></a>

```python
stream_arn: str
```

- *Type:* str

---

##### `stream_label`<sup>Required</sup> <a name="stream_label" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.streamLabel"></a>

```python
stream_label: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.timeouts"></a>

```python
timeouts: DynamodbTableTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference">DynamodbTableTimeoutsOutputReference</a>

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.ttl"></a>

```python
ttl: DynamodbTableTtlOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference">DynamodbTableTtlOutputReference</a>

---

##### `attribute_input`<sup>Optional</sup> <a name="attribute_input" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.attributeInput"></a>

```python
attribute_input: typing.Union[IResolvable, typing.List[DynamodbTableAttribute]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttribute">DynamodbTableAttribute</a>]]

---

##### `billing_mode_input`<sup>Optional</sup> <a name="billing_mode_input" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.billingModeInput"></a>

```python
billing_mode_input: str
```

- *Type:* str

---

##### `global_secondary_index_input`<sup>Optional</sup> <a name="global_secondary_index_input" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.globalSecondaryIndexInput"></a>

```python
global_secondary_index_input: typing.Union[IResolvable, typing.List[DynamodbTableGlobalSecondaryIndex]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex">DynamodbTableGlobalSecondaryIndex</a>]]

---

##### `hash_key_input`<sup>Optional</sup> <a name="hash_key_input" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.hashKeyInput"></a>

```python
hash_key_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `local_secondary_index_input`<sup>Optional</sup> <a name="local_secondary_index_input" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.localSecondaryIndexInput"></a>

```python
local_secondary_index_input: typing.Union[IResolvable, typing.List[DynamodbTableLocalSecondaryIndex]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndex">DynamodbTableLocalSecondaryIndex</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `point_in_time_recovery_input`<sup>Optional</sup> <a name="point_in_time_recovery_input" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.pointInTimeRecoveryInput"></a>

```python
point_in_time_recovery_input: DynamodbTablePointInTimeRecovery
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecovery">DynamodbTablePointInTimeRecovery</a>

---

##### `range_key_input`<sup>Optional</sup> <a name="range_key_input" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.rangeKeyInput"></a>

```python
range_key_input: str
```

- *Type:* str

---

##### `read_capacity_input`<sup>Optional</sup> <a name="read_capacity_input" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.readCapacityInput"></a>

```python
read_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `replica_input`<sup>Optional</sup> <a name="replica_input" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.replicaInput"></a>

```python
replica_input: typing.Union[IResolvable, typing.List[DynamodbTableReplica]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica">DynamodbTableReplica</a>]]

---

##### `restore_date_time_input`<sup>Optional</sup> <a name="restore_date_time_input" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.restoreDateTimeInput"></a>

```python
restore_date_time_input: str
```

- *Type:* str

---

##### `restore_source_name_input`<sup>Optional</sup> <a name="restore_source_name_input" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.restoreSourceNameInput"></a>

```python
restore_source_name_input: str
```

- *Type:* str

---

##### `restore_to_latest_time_input`<sup>Optional</sup> <a name="restore_to_latest_time_input" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.restoreToLatestTimeInput"></a>

```python
restore_to_latest_time_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `server_side_encryption_input`<sup>Optional</sup> <a name="server_side_encryption_input" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.serverSideEncryptionInput"></a>

```python
server_side_encryption_input: DynamodbTableServerSideEncryption
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryption">DynamodbTableServerSideEncryption</a>

---

##### `stream_enabled_input`<sup>Optional</sup> <a name="stream_enabled_input" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.streamEnabledInput"></a>

```python
stream_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `stream_view_type_input`<sup>Optional</sup> <a name="stream_view_type_input" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.streamViewTypeInput"></a>

```python
stream_view_type_input: str
```

- *Type:* str

---

##### `table_class_input`<sup>Optional</sup> <a name="table_class_input" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.tableClassInput"></a>

```python
table_class_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DynamodbTableTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeouts">DynamodbTableTimeouts</a>, cdktf.IResolvable]

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.ttlInput"></a>

```python
ttl_input: DynamodbTableTtl
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtl">DynamodbTableTtl</a>

---

##### `write_capacity_input`<sup>Optional</sup> <a name="write_capacity_input" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.writeCapacityInput"></a>

```python
write_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `billing_mode`<sup>Required</sup> <a name="billing_mode" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.billingMode"></a>

```python
billing_mode: str
```

- *Type:* str

---

##### `hash_key`<sup>Required</sup> <a name="hash_key" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.hashKey"></a>

```python
hash_key: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `range_key`<sup>Required</sup> <a name="range_key" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.rangeKey"></a>

```python
range_key: str
```

- *Type:* str

---

##### `read_capacity`<sup>Required</sup> <a name="read_capacity" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.readCapacity"></a>

```python
read_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `restore_date_time`<sup>Required</sup> <a name="restore_date_time" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.restoreDateTime"></a>

```python
restore_date_time: str
```

- *Type:* str

---

##### `restore_source_name`<sup>Required</sup> <a name="restore_source_name" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.restoreSourceName"></a>

```python
restore_source_name: str
```

- *Type:* str

---

##### `restore_to_latest_time`<sup>Required</sup> <a name="restore_to_latest_time" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.restoreToLatestTime"></a>

```python
restore_to_latest_time: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `stream_enabled`<sup>Required</sup> <a name="stream_enabled" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.streamEnabled"></a>

```python
stream_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `stream_view_type`<sup>Required</sup> <a name="stream_view_type" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.streamViewType"></a>

```python
stream_view_type: str
```

- *Type:* str

---

##### `table_class`<sup>Required</sup> <a name="table_class" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.tableClass"></a>

```python
table_class: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `write_capacity`<sup>Required</sup> <a name="write_capacity" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.writeCapacity"></a>

```python
write_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DynamodbTableAttribute <a name="DynamodbTableAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttribute.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dynamodb_table

dynamodbTable.DynamodbTableAttribute(
  name: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttribute.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#name DynamodbTable#name}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttribute.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#type DynamodbTable#type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttribute.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#name DynamodbTable#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttribute.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#type DynamodbTable#type}.

---

### DynamodbTableConfig <a name="DynamodbTableConfig" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dynamodb_table

dynamodbTable.DynamodbTableConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  attribute: typing.Union[IResolvable, typing.List[DynamodbTableAttribute]] = None,
  billing_mode: str = None,
  global_secondary_index: typing.Union[IResolvable, typing.List[DynamodbTableGlobalSecondaryIndex]] = None,
  hash_key: str = None,
  id: str = None,
  local_secondary_index: typing.Union[IResolvable, typing.List[DynamodbTableLocalSecondaryIndex]] = None,
  point_in_time_recovery: DynamodbTablePointInTimeRecovery = None,
  range_key: str = None,
  read_capacity: typing.Union[int, float] = None,
  replica: typing.Union[IResolvable, typing.List[DynamodbTableReplica]] = None,
  restore_date_time: str = None,
  restore_source_name: str = None,
  restore_to_latest_time: typing.Union[bool, IResolvable] = None,
  server_side_encryption: DynamodbTableServerSideEncryption = None,
  stream_enabled: typing.Union[bool, IResolvable] = None,
  stream_view_type: str = None,
  table_class: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: DynamodbTableTimeouts = None,
  ttl: DynamodbTableTtl = None,
  write_capacity: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#name DynamodbTable#name}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.attribute">attribute</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttribute">DynamodbTableAttribute</a>]]</code> | attribute block. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.billingMode">billing_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#billing_mode DynamodbTable#billing_mode}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.globalSecondaryIndex">global_secondary_index</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex">DynamodbTableGlobalSecondaryIndex</a>]]</code> | global_secondary_index block. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.hashKey">hash_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#hash_key DynamodbTable#hash_key}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#id DynamodbTable#id}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.localSecondaryIndex">local_secondary_index</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndex">DynamodbTableLocalSecondaryIndex</a>]]</code> | local_secondary_index block. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.pointInTimeRecovery">point_in_time_recovery</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecovery">DynamodbTablePointInTimeRecovery</a></code> | point_in_time_recovery block. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.rangeKey">range_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#range_key DynamodbTable#range_key}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.readCapacity">read_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#read_capacity DynamodbTable#read_capacity}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.replica">replica</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica">DynamodbTableReplica</a>]]</code> | replica block. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.restoreDateTime">restore_date_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#restore_date_time DynamodbTable#restore_date_time}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.restoreSourceName">restore_source_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#restore_source_name DynamodbTable#restore_source_name}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.restoreToLatestTime">restore_to_latest_time</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#restore_to_latest_time DynamodbTable#restore_to_latest_time}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.serverSideEncryption">server_side_encryption</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryption">DynamodbTableServerSideEncryption</a></code> | server_side_encryption block. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.streamEnabled">stream_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#stream_enabled DynamodbTable#stream_enabled}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.streamViewType">stream_view_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#stream_view_type DynamodbTable#stream_view_type}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.tableClass">table_class</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#table_class DynamodbTable#table_class}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#tags DynamodbTable#tags}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#tags_all DynamodbTable#tags_all}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeouts">DynamodbTableTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.ttl">ttl</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtl">DynamodbTableTtl</a></code> | ttl block. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.writeCapacity">write_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#write_capacity DynamodbTable#write_capacity}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#name DynamodbTable#name}.

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.attribute"></a>

```python
attribute: typing.Union[IResolvable, typing.List[DynamodbTableAttribute]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttribute">DynamodbTableAttribute</a>]]

attribute block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#attribute DynamodbTable#attribute}

---

##### `billing_mode`<sup>Optional</sup> <a name="billing_mode" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.billingMode"></a>

```python
billing_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#billing_mode DynamodbTable#billing_mode}.

---

##### `global_secondary_index`<sup>Optional</sup> <a name="global_secondary_index" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.globalSecondaryIndex"></a>

```python
global_secondary_index: typing.Union[IResolvable, typing.List[DynamodbTableGlobalSecondaryIndex]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex">DynamodbTableGlobalSecondaryIndex</a>]]

global_secondary_index block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#global_secondary_index DynamodbTable#global_secondary_index}

---

##### `hash_key`<sup>Optional</sup> <a name="hash_key" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.hashKey"></a>

```python
hash_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#hash_key DynamodbTable#hash_key}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#id DynamodbTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `local_secondary_index`<sup>Optional</sup> <a name="local_secondary_index" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.localSecondaryIndex"></a>

```python
local_secondary_index: typing.Union[IResolvable, typing.List[DynamodbTableLocalSecondaryIndex]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndex">DynamodbTableLocalSecondaryIndex</a>]]

local_secondary_index block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#local_secondary_index DynamodbTable#local_secondary_index}

---

##### `point_in_time_recovery`<sup>Optional</sup> <a name="point_in_time_recovery" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.pointInTimeRecovery"></a>

```python
point_in_time_recovery: DynamodbTablePointInTimeRecovery
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecovery">DynamodbTablePointInTimeRecovery</a>

point_in_time_recovery block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#point_in_time_recovery DynamodbTable#point_in_time_recovery}

---

##### `range_key`<sup>Optional</sup> <a name="range_key" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.rangeKey"></a>

```python
range_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#range_key DynamodbTable#range_key}.

---

##### `read_capacity`<sup>Optional</sup> <a name="read_capacity" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.readCapacity"></a>

```python
read_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#read_capacity DynamodbTable#read_capacity}.

---

##### `replica`<sup>Optional</sup> <a name="replica" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.replica"></a>

```python
replica: typing.Union[IResolvable, typing.List[DynamodbTableReplica]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica">DynamodbTableReplica</a>]]

replica block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#replica DynamodbTable#replica}

---

##### `restore_date_time`<sup>Optional</sup> <a name="restore_date_time" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.restoreDateTime"></a>

```python
restore_date_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#restore_date_time DynamodbTable#restore_date_time}.

---

##### `restore_source_name`<sup>Optional</sup> <a name="restore_source_name" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.restoreSourceName"></a>

```python
restore_source_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#restore_source_name DynamodbTable#restore_source_name}.

---

##### `restore_to_latest_time`<sup>Optional</sup> <a name="restore_to_latest_time" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.restoreToLatestTime"></a>

```python
restore_to_latest_time: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#restore_to_latest_time DynamodbTable#restore_to_latest_time}.

---

##### `server_side_encryption`<sup>Optional</sup> <a name="server_side_encryption" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.serverSideEncryption"></a>

```python
server_side_encryption: DynamodbTableServerSideEncryption
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryption">DynamodbTableServerSideEncryption</a>

server_side_encryption block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#server_side_encryption DynamodbTable#server_side_encryption}

---

##### `stream_enabled`<sup>Optional</sup> <a name="stream_enabled" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.streamEnabled"></a>

```python
stream_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#stream_enabled DynamodbTable#stream_enabled}.

---

##### `stream_view_type`<sup>Optional</sup> <a name="stream_view_type" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.streamViewType"></a>

```python
stream_view_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#stream_view_type DynamodbTable#stream_view_type}.

---

##### `table_class`<sup>Optional</sup> <a name="table_class" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.tableClass"></a>

```python
table_class: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#table_class DynamodbTable#table_class}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#tags DynamodbTable#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#tags_all DynamodbTable#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.timeouts"></a>

```python
timeouts: DynamodbTableTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeouts">DynamodbTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#timeouts DynamodbTable#timeouts}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.ttl"></a>

```python
ttl: DynamodbTableTtl
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtl">DynamodbTableTtl</a>

ttl block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#ttl DynamodbTable#ttl}

---

##### `write_capacity`<sup>Optional</sup> <a name="write_capacity" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.writeCapacity"></a>

```python
write_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#write_capacity DynamodbTable#write_capacity}.

---

### DynamodbTableGlobalSecondaryIndex <a name="DynamodbTableGlobalSecondaryIndex" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dynamodb_table

dynamodbTable.DynamodbTableGlobalSecondaryIndex(
  hash_key: str,
  name: str,
  projection_type: str,
  non_key_attributes: typing.List[str] = None,
  range_key: str = None,
  read_capacity: typing.Union[int, float] = None,
  write_capacity: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.property.hashKey">hash_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#hash_key DynamodbTable#hash_key}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#name DynamodbTable#name}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.property.projectionType">projection_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#projection_type DynamodbTable#projection_type}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.property.nonKeyAttributes">non_key_attributes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#non_key_attributes DynamodbTable#non_key_attributes}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.property.rangeKey">range_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#range_key DynamodbTable#range_key}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.property.readCapacity">read_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#read_capacity DynamodbTable#read_capacity}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.property.writeCapacity">write_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#write_capacity DynamodbTable#write_capacity}. |

---

##### `hash_key`<sup>Required</sup> <a name="hash_key" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.property.hashKey"></a>

```python
hash_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#hash_key DynamodbTable#hash_key}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#name DynamodbTable#name}.

---

##### `projection_type`<sup>Required</sup> <a name="projection_type" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.property.projectionType"></a>

```python
projection_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#projection_type DynamodbTable#projection_type}.

---

##### `non_key_attributes`<sup>Optional</sup> <a name="non_key_attributes" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.property.nonKeyAttributes"></a>

```python
non_key_attributes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#non_key_attributes DynamodbTable#non_key_attributes}.

---

##### `range_key`<sup>Optional</sup> <a name="range_key" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.property.rangeKey"></a>

```python
range_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#range_key DynamodbTable#range_key}.

---

##### `read_capacity`<sup>Optional</sup> <a name="read_capacity" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.property.readCapacity"></a>

```python
read_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#read_capacity DynamodbTable#read_capacity}.

---

##### `write_capacity`<sup>Optional</sup> <a name="write_capacity" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.property.writeCapacity"></a>

```python
write_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#write_capacity DynamodbTable#write_capacity}.

---

### DynamodbTableLocalSecondaryIndex <a name="DynamodbTableLocalSecondaryIndex" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndex"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndex.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dynamodb_table

dynamodbTable.DynamodbTableLocalSecondaryIndex(
  name: str,
  projection_type: str,
  range_key: str,
  non_key_attributes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndex.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#name DynamodbTable#name}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndex.property.projectionType">projection_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#projection_type DynamodbTable#projection_type}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndex.property.rangeKey">range_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#range_key DynamodbTable#range_key}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndex.property.nonKeyAttributes">non_key_attributes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#non_key_attributes DynamodbTable#non_key_attributes}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndex.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#name DynamodbTable#name}.

---

##### `projection_type`<sup>Required</sup> <a name="projection_type" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndex.property.projectionType"></a>

```python
projection_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#projection_type DynamodbTable#projection_type}.

---

##### `range_key`<sup>Required</sup> <a name="range_key" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndex.property.rangeKey"></a>

```python
range_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#range_key DynamodbTable#range_key}.

---

##### `non_key_attributes`<sup>Optional</sup> <a name="non_key_attributes" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndex.property.nonKeyAttributes"></a>

```python
non_key_attributes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#non_key_attributes DynamodbTable#non_key_attributes}.

---

### DynamodbTablePointInTimeRecovery <a name="DynamodbTablePointInTimeRecovery" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecovery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecovery.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dynamodb_table

dynamodbTable.DynamodbTablePointInTimeRecovery(
  enabled: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecovery.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#enabled DynamodbTable#enabled}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecovery.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#enabled DynamodbTable#enabled}.

---

### DynamodbTableReplica <a name="DynamodbTableReplica" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dynamodb_table

dynamodbTable.DynamodbTableReplica(
  region_name: str,
  kms_key_arn: str = None,
  point_in_time_recovery: typing.Union[bool, IResolvable] = None,
  propagate_tags: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica.property.regionName">region_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#region_name DynamodbTable#region_name}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#kms_key_arn DynamodbTable#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica.property.pointInTimeRecovery">point_in_time_recovery</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#point_in_time_recovery DynamodbTable#point_in_time_recovery}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica.property.propagateTags">propagate_tags</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#propagate_tags DynamodbTable#propagate_tags}. |

---

##### `region_name`<sup>Required</sup> <a name="region_name" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica.property.regionName"></a>

```python
region_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#region_name DynamodbTable#region_name}.

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#kms_key_arn DynamodbTable#kms_key_arn}.

---

##### `point_in_time_recovery`<sup>Optional</sup> <a name="point_in_time_recovery" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica.property.pointInTimeRecovery"></a>

```python
point_in_time_recovery: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#point_in_time_recovery DynamodbTable#point_in_time_recovery}.

---

##### `propagate_tags`<sup>Optional</sup> <a name="propagate_tags" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica.property.propagateTags"></a>

```python
propagate_tags: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#propagate_tags DynamodbTable#propagate_tags}.

---

### DynamodbTableServerSideEncryption <a name="DynamodbTableServerSideEncryption" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryption.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dynamodb_table

dynamodbTable.DynamodbTableServerSideEncryption(
  enabled: typing.Union[bool, IResolvable],
  kms_key_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryption.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#enabled DynamodbTable#enabled}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryption.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#kms_key_arn DynamodbTable#kms_key_arn}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryption.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#enabled DynamodbTable#enabled}.

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryption.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#kms_key_arn DynamodbTable#kms_key_arn}.

---

### DynamodbTableTimeouts <a name="DynamodbTableTimeouts" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dynamodb_table

dynamodbTable.DynamodbTableTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#create DynamodbTable#create}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#delete DynamodbTable#delete}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#update DynamodbTable#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#create DynamodbTable#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#delete DynamodbTable#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#update DynamodbTable#update}.

---

### DynamodbTableTtl <a name="DynamodbTableTtl" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtl.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dynamodb_table

dynamodbTable.DynamodbTableTtl(
  attribute_name: str,
  enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtl.property.attributeName">attribute_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#attribute_name DynamodbTable#attribute_name}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtl.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#enabled DynamodbTable#enabled}. |

---

##### `attribute_name`<sup>Required</sup> <a name="attribute_name" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtl.property.attributeName"></a>

```python
attribute_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#attribute_name DynamodbTable#attribute_name}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtl.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#enabled DynamodbTable#enabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### DynamodbTableAttributeList <a name="DynamodbTableAttributeList" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dynamodb_table

dynamodbTable.DynamodbTableAttributeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DynamodbTableAttributeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttribute">DynamodbTableAttribute</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DynamodbTableAttribute]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttribute">DynamodbTableAttribute</a>]]

---


### DynamodbTableAttributeOutputReference <a name="DynamodbTableAttributeOutputReference" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dynamodb_table

dynamodbTable.DynamodbTableAttributeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttribute">DynamodbTableAttribute</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DynamodbTableAttribute, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttribute">DynamodbTableAttribute</a>, cdktf.IResolvable]

---


### DynamodbTableGlobalSecondaryIndexList <a name="DynamodbTableGlobalSecondaryIndexList" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dynamodb_table

dynamodbTable.DynamodbTableGlobalSecondaryIndexList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DynamodbTableGlobalSecondaryIndexOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex">DynamodbTableGlobalSecondaryIndex</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DynamodbTableGlobalSecondaryIndex]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex">DynamodbTableGlobalSecondaryIndex</a>]]

---


### DynamodbTableGlobalSecondaryIndexOutputReference <a name="DynamodbTableGlobalSecondaryIndexOutputReference" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dynamodb_table

dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.resetNonKeyAttributes">reset_non_key_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.resetRangeKey">reset_range_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.resetReadCapacity">reset_read_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.resetWriteCapacity">reset_write_capacity</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_non_key_attributes` <a name="reset_non_key_attributes" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.resetNonKeyAttributes"></a>

```python
def reset_non_key_attributes() -> None
```

##### `reset_range_key` <a name="reset_range_key" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.resetRangeKey"></a>

```python
def reset_range_key() -> None
```

##### `reset_read_capacity` <a name="reset_read_capacity" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.resetReadCapacity"></a>

```python
def reset_read_capacity() -> None
```

##### `reset_write_capacity` <a name="reset_write_capacity" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.resetWriteCapacity"></a>

```python
def reset_write_capacity() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.hashKeyInput">hash_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.nonKeyAttributesInput">non_key_attributes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.projectionTypeInput">projection_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.rangeKeyInput">range_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.readCapacityInput">read_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.writeCapacityInput">write_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.hashKey">hash_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.nonKeyAttributes">non_key_attributes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.projectionType">projection_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.rangeKey">range_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.readCapacity">read_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.writeCapacity">write_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex">DynamodbTableGlobalSecondaryIndex</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hash_key_input`<sup>Optional</sup> <a name="hash_key_input" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.hashKeyInput"></a>

```python
hash_key_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `non_key_attributes_input`<sup>Optional</sup> <a name="non_key_attributes_input" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.nonKeyAttributesInput"></a>

```python
non_key_attributes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `projection_type_input`<sup>Optional</sup> <a name="projection_type_input" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.projectionTypeInput"></a>

```python
projection_type_input: str
```

- *Type:* str

---

##### `range_key_input`<sup>Optional</sup> <a name="range_key_input" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.rangeKeyInput"></a>

```python
range_key_input: str
```

- *Type:* str

---

##### `read_capacity_input`<sup>Optional</sup> <a name="read_capacity_input" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.readCapacityInput"></a>

```python
read_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `write_capacity_input`<sup>Optional</sup> <a name="write_capacity_input" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.writeCapacityInput"></a>

```python
write_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hash_key`<sup>Required</sup> <a name="hash_key" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.hashKey"></a>

```python
hash_key: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `non_key_attributes`<sup>Required</sup> <a name="non_key_attributes" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.nonKeyAttributes"></a>

```python
non_key_attributes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `projection_type`<sup>Required</sup> <a name="projection_type" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.projectionType"></a>

```python
projection_type: str
```

- *Type:* str

---

##### `range_key`<sup>Required</sup> <a name="range_key" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.rangeKey"></a>

```python
range_key: str
```

- *Type:* str

---

##### `read_capacity`<sup>Required</sup> <a name="read_capacity" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.readCapacity"></a>

```python
read_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `write_capacity`<sup>Required</sup> <a name="write_capacity" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.writeCapacity"></a>

```python
write_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DynamodbTableGlobalSecondaryIndex, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex">DynamodbTableGlobalSecondaryIndex</a>, cdktf.IResolvable]

---


### DynamodbTableLocalSecondaryIndexList <a name="DynamodbTableLocalSecondaryIndexList" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dynamodb_table

dynamodbTable.DynamodbTableLocalSecondaryIndexList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DynamodbTableLocalSecondaryIndexOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndex">DynamodbTableLocalSecondaryIndex</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DynamodbTableLocalSecondaryIndex]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndex">DynamodbTableLocalSecondaryIndex</a>]]

---


### DynamodbTableLocalSecondaryIndexOutputReference <a name="DynamodbTableLocalSecondaryIndexOutputReference" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dynamodb_table

dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.resetNonKeyAttributes">reset_non_key_attributes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_non_key_attributes` <a name="reset_non_key_attributes" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.resetNonKeyAttributes"></a>

```python
def reset_non_key_attributes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.nonKeyAttributesInput">non_key_attributes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.projectionTypeInput">projection_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.rangeKeyInput">range_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.nonKeyAttributes">non_key_attributes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.projectionType">projection_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.rangeKey">range_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndex">DynamodbTableLocalSecondaryIndex</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `non_key_attributes_input`<sup>Optional</sup> <a name="non_key_attributes_input" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.nonKeyAttributesInput"></a>

```python
non_key_attributes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `projection_type_input`<sup>Optional</sup> <a name="projection_type_input" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.projectionTypeInput"></a>

```python
projection_type_input: str
```

- *Type:* str

---

##### `range_key_input`<sup>Optional</sup> <a name="range_key_input" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.rangeKeyInput"></a>

```python
range_key_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `non_key_attributes`<sup>Required</sup> <a name="non_key_attributes" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.nonKeyAttributes"></a>

```python
non_key_attributes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `projection_type`<sup>Required</sup> <a name="projection_type" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.projectionType"></a>

```python
projection_type: str
```

- *Type:* str

---

##### `range_key`<sup>Required</sup> <a name="range_key" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.rangeKey"></a>

```python
range_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DynamodbTableLocalSecondaryIndex, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndex">DynamodbTableLocalSecondaryIndex</a>, cdktf.IResolvable]

---


### DynamodbTablePointInTimeRecoveryOutputReference <a name="DynamodbTablePointInTimeRecoveryOutputReference" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dynamodb_table

dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecovery">DynamodbTablePointInTimeRecovery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.property.internalValue"></a>

```python
internal_value: DynamodbTablePointInTimeRecovery
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecovery">DynamodbTablePointInTimeRecovery</a>

---


### DynamodbTableReplicaList <a name="DynamodbTableReplicaList" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dynamodb_table

dynamodbTable.DynamodbTableReplicaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DynamodbTableReplicaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica">DynamodbTableReplica</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DynamodbTableReplica]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica">DynamodbTableReplica</a>]]

---


### DynamodbTableReplicaOutputReference <a name="DynamodbTableReplicaOutputReference" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dynamodb_table

dynamodbTable.DynamodbTableReplicaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.resetPointInTimeRecovery">reset_point_in_time_recovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.resetPropagateTags">reset_propagate_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```

##### `reset_point_in_time_recovery` <a name="reset_point_in_time_recovery" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.resetPointInTimeRecovery"></a>

```python
def reset_point_in_time_recovery() -> None
```

##### `reset_propagate_tags` <a name="reset_propagate_tags" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.resetPropagateTags"></a>

```python
def reset_propagate_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.streamArn">stream_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.streamLabel">stream_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.pointInTimeRecoveryInput">point_in_time_recovery_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.propagateTagsInput">propagate_tags_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.regionNameInput">region_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.pointInTimeRecovery">point_in_time_recovery</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.propagateTags">propagate_tags</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.regionName">region_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica">DynamodbTableReplica</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `stream_arn`<sup>Required</sup> <a name="stream_arn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.streamArn"></a>

```python
stream_arn: str
```

- *Type:* str

---

##### `stream_label`<sup>Required</sup> <a name="stream_label" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.streamLabel"></a>

```python
stream_label: str
```

- *Type:* str

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `point_in_time_recovery_input`<sup>Optional</sup> <a name="point_in_time_recovery_input" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.pointInTimeRecoveryInput"></a>

```python
point_in_time_recovery_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `propagate_tags_input`<sup>Optional</sup> <a name="propagate_tags_input" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.propagateTagsInput"></a>

```python
propagate_tags_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `region_name_input`<sup>Optional</sup> <a name="region_name_input" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.regionNameInput"></a>

```python
region_name_input: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `point_in_time_recovery`<sup>Required</sup> <a name="point_in_time_recovery" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.pointInTimeRecovery"></a>

```python
point_in_time_recovery: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `propagate_tags`<sup>Required</sup> <a name="propagate_tags" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.propagateTags"></a>

```python
propagate_tags: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `region_name`<sup>Required</sup> <a name="region_name" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.regionName"></a>

```python
region_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DynamodbTableReplica, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica">DynamodbTableReplica</a>, cdktf.IResolvable]

---


### DynamodbTableServerSideEncryptionOutputReference <a name="DynamodbTableServerSideEncryptionOutputReference" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dynamodb_table

dynamodbTable.DynamodbTableServerSideEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryption">DynamodbTableServerSideEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: DynamodbTableServerSideEncryption
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryption">DynamodbTableServerSideEncryption</a>

---


### DynamodbTableTimeoutsOutputReference <a name="DynamodbTableTimeoutsOutputReference" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dynamodb_table

dynamodbTable.DynamodbTableTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeouts">DynamodbTableTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DynamodbTableTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeouts">DynamodbTableTimeouts</a>, cdktf.IResolvable]

---


### DynamodbTableTtlOutputReference <a name="DynamodbTableTtlOutputReference" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dynamodb_table

dynamodbTable.DynamodbTableTtlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.property.attributeNameInput">attribute_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.property.attributeName">attribute_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtl">DynamodbTableTtl</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_name_input`<sup>Optional</sup> <a name="attribute_name_input" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.property.attributeNameInput"></a>

```python
attribute_name_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `attribute_name`<sup>Required</sup> <a name="attribute_name" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.property.attributeName"></a>

```python
attribute_name: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.property.internalValue"></a>

```python
internal_value: DynamodbTableTtl
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtl">DynamodbTableTtl</a>

---



