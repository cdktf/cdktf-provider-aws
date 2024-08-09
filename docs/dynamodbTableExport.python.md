# `dynamodbTableExport` Submodule <a name="`dynamodbTableExport` Submodule" id="@cdktf/provider-aws.dynamodbTableExport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DynamodbTableExport <a name="DynamodbTableExport" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/dynamodb_table_export aws_dynamodb_table_export}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dynamodb_table_export

dynamodbTableExport.DynamodbTableExport(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  s3_bucket: str,
  table_arn: str,
  export_format: str = None,
  export_time: str = None,
  id: str = None,
  s3_bucket_owner: str = None,
  s3_prefix: str = None,
  s3_sse_algorithm: str = None,
  s3_sse_kms_key_id: str = None,
  timeouts: DynamodbTableExportTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.s3Bucket">s3_bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/dynamodb_table_export#s3_bucket DynamodbTableExport#s3_bucket}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.tableArn">table_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/dynamodb_table_export#table_arn DynamodbTableExport#table_arn}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.exportFormat">export_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/dynamodb_table_export#export_format DynamodbTableExport#export_format}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.exportTime">export_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/dynamodb_table_export#export_time DynamodbTableExport#export_time}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/dynamodb_table_export#id DynamodbTableExport#id}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.s3BucketOwner">s3_bucket_owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/dynamodb_table_export#s3_bucket_owner DynamodbTableExport#s3_bucket_owner}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.s3Prefix">s3_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/dynamodb_table_export#s3_prefix DynamodbTableExport#s3_prefix}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.s3SseAlgorithm">s3_sse_algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/dynamodb_table_export#s3_sse_algorithm DynamodbTableExport#s3_sse_algorithm}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.s3SseKmsKeyId">s3_sse_kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/dynamodb_table_export#s3_sse_kms_key_id DynamodbTableExport#s3_sse_kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeouts">DynamodbTableExportTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `s3_bucket`<sup>Required</sup> <a name="s3_bucket" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.s3Bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/dynamodb_table_export#s3_bucket DynamodbTableExport#s3_bucket}.

---

##### `table_arn`<sup>Required</sup> <a name="table_arn" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.tableArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/dynamodb_table_export#table_arn DynamodbTableExport#table_arn}.

---

##### `export_format`<sup>Optional</sup> <a name="export_format" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.exportFormat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/dynamodb_table_export#export_format DynamodbTableExport#export_format}.

---

##### `export_time`<sup>Optional</sup> <a name="export_time" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.exportTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/dynamodb_table_export#export_time DynamodbTableExport#export_time}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/dynamodb_table_export#id DynamodbTableExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `s3_bucket_owner`<sup>Optional</sup> <a name="s3_bucket_owner" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.s3BucketOwner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/dynamodb_table_export#s3_bucket_owner DynamodbTableExport#s3_bucket_owner}.

---

##### `s3_prefix`<sup>Optional</sup> <a name="s3_prefix" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.s3Prefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/dynamodb_table_export#s3_prefix DynamodbTableExport#s3_prefix}.

---

##### `s3_sse_algorithm`<sup>Optional</sup> <a name="s3_sse_algorithm" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.s3SseAlgorithm"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/dynamodb_table_export#s3_sse_algorithm DynamodbTableExport#s3_sse_algorithm}.

---

##### `s3_sse_kms_key_id`<sup>Optional</sup> <a name="s3_sse_kms_key_id" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.s3SseKmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/dynamodb_table_export#s3_sse_kms_key_id DynamodbTableExport#s3_sse_kms_key_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeouts">DynamodbTableExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/dynamodb_table_export#timeouts DynamodbTableExport#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.resetExportFormat">reset_export_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.resetExportTime">reset_export_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.resetS3BucketOwner">reset_s3_bucket_owner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.resetS3Prefix">reset_s3_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.resetS3SseAlgorithm">reset_s3_sse_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.resetS3SseKmsKeyId">reset_s3_sse_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/dynamodb_table_export#create DynamodbTableExport#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/dynamodb_table_export#delete DynamodbTableExport#delete}.

---

##### `reset_export_format` <a name="reset_export_format" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.resetExportFormat"></a>

```python
def reset_export_format() -> None
```

##### `reset_export_time` <a name="reset_export_time" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.resetExportTime"></a>

```python
def reset_export_time() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_s3_bucket_owner` <a name="reset_s3_bucket_owner" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.resetS3BucketOwner"></a>

```python
def reset_s3_bucket_owner() -> None
```

##### `reset_s3_prefix` <a name="reset_s3_prefix" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.resetS3Prefix"></a>

```python
def reset_s3_prefix() -> None
```

##### `reset_s3_sse_algorithm` <a name="reset_s3_sse_algorithm" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.resetS3SseAlgorithm"></a>

```python
def reset_s3_sse_algorithm() -> None
```

##### `reset_s3_sse_kms_key_id` <a name="reset_s3_sse_kms_key_id" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.resetS3SseKmsKeyId"></a>

```python
def reset_s3_sse_kms_key_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DynamodbTableExport resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import dynamodb_table_export

dynamodbTableExport.DynamodbTableExport.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import dynamodb_table_export

dynamodbTableExport.DynamodbTableExport.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import dynamodb_table_export

dynamodbTableExport.DynamodbTableExport.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import dynamodb_table_export

dynamodbTableExport.DynamodbTableExport.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DynamodbTableExport resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DynamodbTableExport to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DynamodbTableExport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/dynamodb_table_export#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DynamodbTableExport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.billedSizeInBytes">billed_size_in_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.exportStatus">export_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.itemCount">item_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.manifestFilesS3Key">manifest_files_s3_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference">DynamodbTableExportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.exportFormatInput">export_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.exportTimeInput">export_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.s3BucketInput">s3_bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.s3BucketOwnerInput">s3_bucket_owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.s3PrefixInput">s3_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.s3SseAlgorithmInput">s3_sse_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.s3SseKmsKeyIdInput">s3_sse_kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.tableArnInput">table_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeouts">DynamodbTableExportTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.exportFormat">export_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.exportTime">export_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.s3Bucket">s3_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.s3BucketOwner">s3_bucket_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.s3Prefix">s3_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.s3SseAlgorithm">s3_sse_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.s3SseKmsKeyId">s3_sse_kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.tableArn">table_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `billed_size_in_bytes`<sup>Required</sup> <a name="billed_size_in_bytes" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.billedSizeInBytes"></a>

```python
billed_size_in_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `export_status`<sup>Required</sup> <a name="export_status" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.exportStatus"></a>

```python
export_status: str
```

- *Type:* str

---

##### `item_count`<sup>Required</sup> <a name="item_count" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.itemCount"></a>

```python
item_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `manifest_files_s3_key`<sup>Required</sup> <a name="manifest_files_s3_key" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.manifestFilesS3Key"></a>

```python
manifest_files_s3_key: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.timeouts"></a>

```python
timeouts: DynamodbTableExportTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference">DynamodbTableExportTimeoutsOutputReference</a>

---

##### `export_format_input`<sup>Optional</sup> <a name="export_format_input" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.exportFormatInput"></a>

```python
export_format_input: str
```

- *Type:* str

---

##### `export_time_input`<sup>Optional</sup> <a name="export_time_input" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.exportTimeInput"></a>

```python
export_time_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `s3_bucket_input`<sup>Optional</sup> <a name="s3_bucket_input" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.s3BucketInput"></a>

```python
s3_bucket_input: str
```

- *Type:* str

---

##### `s3_bucket_owner_input`<sup>Optional</sup> <a name="s3_bucket_owner_input" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.s3BucketOwnerInput"></a>

```python
s3_bucket_owner_input: str
```

- *Type:* str

---

##### `s3_prefix_input`<sup>Optional</sup> <a name="s3_prefix_input" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.s3PrefixInput"></a>

```python
s3_prefix_input: str
```

- *Type:* str

---

##### `s3_sse_algorithm_input`<sup>Optional</sup> <a name="s3_sse_algorithm_input" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.s3SseAlgorithmInput"></a>

```python
s3_sse_algorithm_input: str
```

- *Type:* str

---

##### `s3_sse_kms_key_id_input`<sup>Optional</sup> <a name="s3_sse_kms_key_id_input" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.s3SseKmsKeyIdInput"></a>

```python
s3_sse_kms_key_id_input: str
```

- *Type:* str

---

##### `table_arn_input`<sup>Optional</sup> <a name="table_arn_input" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.tableArnInput"></a>

```python
table_arn_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DynamodbTableExportTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeouts">DynamodbTableExportTimeouts</a>]

---

##### `export_format`<sup>Required</sup> <a name="export_format" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.exportFormat"></a>

```python
export_format: str
```

- *Type:* str

---

##### `export_time`<sup>Required</sup> <a name="export_time" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.exportTime"></a>

```python
export_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `s3_bucket`<sup>Required</sup> <a name="s3_bucket" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.s3Bucket"></a>

```python
s3_bucket: str
```

- *Type:* str

---

##### `s3_bucket_owner`<sup>Required</sup> <a name="s3_bucket_owner" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.s3BucketOwner"></a>

```python
s3_bucket_owner: str
```

- *Type:* str

---

##### `s3_prefix`<sup>Required</sup> <a name="s3_prefix" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.s3Prefix"></a>

```python
s3_prefix: str
```

- *Type:* str

---

##### `s3_sse_algorithm`<sup>Required</sup> <a name="s3_sse_algorithm" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.s3SseAlgorithm"></a>

```python
s3_sse_algorithm: str
```

- *Type:* str

---

##### `s3_sse_kms_key_id`<sup>Required</sup> <a name="s3_sse_kms_key_id" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.s3SseKmsKeyId"></a>

```python
s3_sse_kms_key_id: str
```

- *Type:* str

---

##### `table_arn`<sup>Required</sup> <a name="table_arn" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.tableArn"></a>

```python
table_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExport.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DynamodbTableExportConfig <a name="DynamodbTableExportConfig" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dynamodb_table_export

dynamodbTableExport.DynamodbTableExportConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  s3_bucket: str,
  table_arn: str,
  export_format: str = None,
  export_time: str = None,
  id: str = None,
  s3_bucket_owner: str = None,
  s3_prefix: str = None,
  s3_sse_algorithm: str = None,
  s3_sse_kms_key_id: str = None,
  timeouts: DynamodbTableExportTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.s3Bucket">s3_bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/dynamodb_table_export#s3_bucket DynamodbTableExport#s3_bucket}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.tableArn">table_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/dynamodb_table_export#table_arn DynamodbTableExport#table_arn}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.exportFormat">export_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/dynamodb_table_export#export_format DynamodbTableExport#export_format}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.exportTime">export_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/dynamodb_table_export#export_time DynamodbTableExport#export_time}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/dynamodb_table_export#id DynamodbTableExport#id}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.s3BucketOwner">s3_bucket_owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/dynamodb_table_export#s3_bucket_owner DynamodbTableExport#s3_bucket_owner}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.s3Prefix">s3_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/dynamodb_table_export#s3_prefix DynamodbTableExport#s3_prefix}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.s3SseAlgorithm">s3_sse_algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/dynamodb_table_export#s3_sse_algorithm DynamodbTableExport#s3_sse_algorithm}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.s3SseKmsKeyId">s3_sse_kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/dynamodb_table_export#s3_sse_kms_key_id DynamodbTableExport#s3_sse_kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeouts">DynamodbTableExportTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `s3_bucket`<sup>Required</sup> <a name="s3_bucket" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.s3Bucket"></a>

```python
s3_bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/dynamodb_table_export#s3_bucket DynamodbTableExport#s3_bucket}.

---

##### `table_arn`<sup>Required</sup> <a name="table_arn" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.tableArn"></a>

```python
table_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/dynamodb_table_export#table_arn DynamodbTableExport#table_arn}.

---

##### `export_format`<sup>Optional</sup> <a name="export_format" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.exportFormat"></a>

```python
export_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/dynamodb_table_export#export_format DynamodbTableExport#export_format}.

---

##### `export_time`<sup>Optional</sup> <a name="export_time" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.exportTime"></a>

```python
export_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/dynamodb_table_export#export_time DynamodbTableExport#export_time}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/dynamodb_table_export#id DynamodbTableExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `s3_bucket_owner`<sup>Optional</sup> <a name="s3_bucket_owner" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.s3BucketOwner"></a>

```python
s3_bucket_owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/dynamodb_table_export#s3_bucket_owner DynamodbTableExport#s3_bucket_owner}.

---

##### `s3_prefix`<sup>Optional</sup> <a name="s3_prefix" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.s3Prefix"></a>

```python
s3_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/dynamodb_table_export#s3_prefix DynamodbTableExport#s3_prefix}.

---

##### `s3_sse_algorithm`<sup>Optional</sup> <a name="s3_sse_algorithm" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.s3SseAlgorithm"></a>

```python
s3_sse_algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/dynamodb_table_export#s3_sse_algorithm DynamodbTableExport#s3_sse_algorithm}.

---

##### `s3_sse_kms_key_id`<sup>Optional</sup> <a name="s3_sse_kms_key_id" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.s3SseKmsKeyId"></a>

```python
s3_sse_kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/dynamodb_table_export#s3_sse_kms_key_id DynamodbTableExport#s3_sse_kms_key_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.timeouts"></a>

```python
timeouts: DynamodbTableExportTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeouts">DynamodbTableExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/dynamodb_table_export#timeouts DynamodbTableExport#timeouts}

---

### DynamodbTableExportTimeouts <a name="DynamodbTableExportTimeouts" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dynamodb_table_export

dynamodbTableExport.DynamodbTableExportTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/dynamodb_table_export#create DynamodbTableExport#create}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/dynamodb_table_export#delete DynamodbTableExport#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/dynamodb_table_export#create DynamodbTableExport#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/dynamodb_table_export#delete DynamodbTableExport#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DynamodbTableExportTimeoutsOutputReference <a name="DynamodbTableExportTimeoutsOutputReference" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dynamodb_table_export

dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeouts">DynamodbTableExportTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DynamodbTableExportTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dynamodbTableExport.DynamodbTableExportTimeouts">DynamodbTableExportTimeouts</a>]

---



