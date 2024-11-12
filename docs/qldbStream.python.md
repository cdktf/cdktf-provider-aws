# `qldbStream` Submodule <a name="`qldbStream` Submodule" id="@cdktf/provider-aws.qldbStream"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QldbStream <a name="QldbStream" id="@cdktf/provider-aws.qldbStream.QldbStream"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/qldb_stream aws_qldb_stream}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.qldbStream.QldbStream.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import qldb_stream

qldbStream.QldbStream(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  inclusive_start_time: str,
  kinesis_configuration: QldbStreamKinesisConfiguration,
  ledger_name: str,
  role_arn: str,
  stream_name: str,
  exclusive_end_time: str = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: QldbStreamTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.Initializer.parameter.inclusiveStartTime">inclusive_start_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/qldb_stream#inclusive_start_time QldbStream#inclusive_start_time}. |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.Initializer.parameter.kinesisConfiguration">kinesis_configuration</a></code> | <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfiguration">QldbStreamKinesisConfiguration</a></code> | kinesis_configuration block. |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.Initializer.parameter.ledgerName">ledger_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/qldb_stream#ledger_name QldbStream#ledger_name}. |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/qldb_stream#role_arn QldbStream#role_arn}. |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.Initializer.parameter.streamName">stream_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/qldb_stream#stream_name QldbStream#stream_name}. |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.Initializer.parameter.exclusiveEndTime">exclusive_end_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/qldb_stream#exclusive_end_time QldbStream#exclusive_end_time}. |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/qldb_stream#id QldbStream#id}. |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/qldb_stream#tags QldbStream#tags}. |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/qldb_stream#tags_all QldbStream#tags_all}. |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamTimeouts">QldbStreamTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.qldbStream.QldbStream.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.qldbStream.QldbStream.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.qldbStream.QldbStream.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.qldbStream.QldbStream.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.qldbStream.QldbStream.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.qldbStream.QldbStream.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.qldbStream.QldbStream.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.qldbStream.QldbStream.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.qldbStream.QldbStream.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `inclusive_start_time`<sup>Required</sup> <a name="inclusive_start_time" id="@cdktf/provider-aws.qldbStream.QldbStream.Initializer.parameter.inclusiveStartTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/qldb_stream#inclusive_start_time QldbStream#inclusive_start_time}.

---

##### `kinesis_configuration`<sup>Required</sup> <a name="kinesis_configuration" id="@cdktf/provider-aws.qldbStream.QldbStream.Initializer.parameter.kinesisConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfiguration">QldbStreamKinesisConfiguration</a>

kinesis_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/qldb_stream#kinesis_configuration QldbStream#kinesis_configuration}

---

##### `ledger_name`<sup>Required</sup> <a name="ledger_name" id="@cdktf/provider-aws.qldbStream.QldbStream.Initializer.parameter.ledgerName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/qldb_stream#ledger_name QldbStream#ledger_name}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.qldbStream.QldbStream.Initializer.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/qldb_stream#role_arn QldbStream#role_arn}.

---

##### `stream_name`<sup>Required</sup> <a name="stream_name" id="@cdktf/provider-aws.qldbStream.QldbStream.Initializer.parameter.streamName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/qldb_stream#stream_name QldbStream#stream_name}.

---

##### `exclusive_end_time`<sup>Optional</sup> <a name="exclusive_end_time" id="@cdktf/provider-aws.qldbStream.QldbStream.Initializer.parameter.exclusiveEndTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/qldb_stream#exclusive_end_time QldbStream#exclusive_end_time}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.qldbStream.QldbStream.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/qldb_stream#id QldbStream#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.qldbStream.QldbStream.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/qldb_stream#tags QldbStream#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.qldbStream.QldbStream.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/qldb_stream#tags_all QldbStream#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.qldbStream.QldbStream.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.qldbStream.QldbStreamTimeouts">QldbStreamTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/qldb_stream#timeouts QldbStream#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.putKinesisConfiguration">put_kinesis_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.resetExclusiveEndTime">reset_exclusive_end_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.qldbStream.QldbStream.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.qldbStream.QldbStream.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.qldbStream.QldbStream.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.qldbStream.QldbStream.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.qldbStream.QldbStream.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.qldbStream.QldbStream.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.qldbStream.QldbStream.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.qldbStream.QldbStream.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.qldbStream.QldbStream.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.qldbStream.QldbStream.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.qldbStream.QldbStream.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.qldbStream.QldbStream.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.qldbStream.QldbStream.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.qldbStream.QldbStream.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.qldbStream.QldbStream.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.qldbStream.QldbStream.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.qldbStream.QldbStream.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.qldbStream.QldbStream.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.qldbStream.QldbStream.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.qldbStream.QldbStream.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.qldbStream.QldbStream.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.qldbStream.QldbStream.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.qldbStream.QldbStream.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.qldbStream.QldbStream.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.qldbStream.QldbStream.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.qldbStream.QldbStream.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.qldbStream.QldbStream.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.qldbStream.QldbStream.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.qldbStream.QldbStream.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.qldbStream.QldbStream.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.qldbStream.QldbStream.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.qldbStream.QldbStream.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.qldbStream.QldbStream.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.qldbStream.QldbStream.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.qldbStream.QldbStream.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.qldbStream.QldbStream.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.qldbStream.QldbStream.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.qldbStream.QldbStream.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.qldbStream.QldbStream.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.qldbStream.QldbStream.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.qldbStream.QldbStream.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.qldbStream.QldbStream.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.qldbStream.QldbStream.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_kinesis_configuration` <a name="put_kinesis_configuration" id="@cdktf/provider-aws.qldbStream.QldbStream.putKinesisConfiguration"></a>

```python
def put_kinesis_configuration(
  stream_arn: str,
  aggregation_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `stream_arn`<sup>Required</sup> <a name="stream_arn" id="@cdktf/provider-aws.qldbStream.QldbStream.putKinesisConfiguration.parameter.streamArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/qldb_stream#stream_arn QldbStream#stream_arn}.

---

###### `aggregation_enabled`<sup>Optional</sup> <a name="aggregation_enabled" id="@cdktf/provider-aws.qldbStream.QldbStream.putKinesisConfiguration.parameter.aggregationEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/qldb_stream#aggregation_enabled QldbStream#aggregation_enabled}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.qldbStream.QldbStream.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.qldbStream.QldbStream.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/qldb_stream#create QldbStream#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.qldbStream.QldbStream.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/qldb_stream#delete QldbStream#delete}.

---

##### `reset_exclusive_end_time` <a name="reset_exclusive_end_time" id="@cdktf/provider-aws.qldbStream.QldbStream.resetExclusiveEndTime"></a>

```python
def reset_exclusive_end_time() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.qldbStream.QldbStream.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.qldbStream.QldbStream.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.qldbStream.QldbStream.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.qldbStream.QldbStream.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a QldbStream resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.qldbStream.QldbStream.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import qldb_stream

qldbStream.QldbStream.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.qldbStream.QldbStream.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.qldbStream.QldbStream.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import qldb_stream

qldbStream.QldbStream.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.qldbStream.QldbStream.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.qldbStream.QldbStream.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import qldb_stream

qldbStream.QldbStream.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.qldbStream.QldbStream.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.qldbStream.QldbStream.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import qldb_stream

qldbStream.QldbStream.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a QldbStream resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.qldbStream.QldbStream.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.qldbStream.QldbStream.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the QldbStream to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.qldbStream.QldbStream.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing QldbStream that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/qldb_stream#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.qldbStream.QldbStream.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the QldbStream to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.kinesisConfiguration">kinesis_configuration</a></code> | <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference">QldbStreamKinesisConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference">QldbStreamTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.exclusiveEndTimeInput">exclusive_end_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.inclusiveStartTimeInput">inclusive_start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.kinesisConfigurationInput">kinesis_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfiguration">QldbStreamKinesisConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.ledgerNameInput">ledger_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.streamNameInput">stream_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.qldbStream.QldbStreamTimeouts">QldbStreamTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.exclusiveEndTime">exclusive_end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.inclusiveStartTime">inclusive_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.ledgerName">ledger_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.streamName">stream_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.qldbStream.QldbStream.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.qldbStream.QldbStream.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.qldbStream.QldbStream.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.qldbStream.QldbStream.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.qldbStream.QldbStream.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.qldbStream.QldbStream.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.qldbStream.QldbStream.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.qldbStream.QldbStream.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.qldbStream.QldbStream.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.qldbStream.QldbStream.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.qldbStream.QldbStream.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.qldbStream.QldbStream.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.qldbStream.QldbStream.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.qldbStream.QldbStream.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.qldbStream.QldbStream.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `kinesis_configuration`<sup>Required</sup> <a name="kinesis_configuration" id="@cdktf/provider-aws.qldbStream.QldbStream.property.kinesisConfiguration"></a>

```python
kinesis_configuration: QldbStreamKinesisConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference">QldbStreamKinesisConfigurationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.qldbStream.QldbStream.property.timeouts"></a>

```python
timeouts: QldbStreamTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference">QldbStreamTimeoutsOutputReference</a>

---

##### `exclusive_end_time_input`<sup>Optional</sup> <a name="exclusive_end_time_input" id="@cdktf/provider-aws.qldbStream.QldbStream.property.exclusiveEndTimeInput"></a>

```python
exclusive_end_time_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.qldbStream.QldbStream.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `inclusive_start_time_input`<sup>Optional</sup> <a name="inclusive_start_time_input" id="@cdktf/provider-aws.qldbStream.QldbStream.property.inclusiveStartTimeInput"></a>

```python
inclusive_start_time_input: str
```

- *Type:* str

---

##### `kinesis_configuration_input`<sup>Optional</sup> <a name="kinesis_configuration_input" id="@cdktf/provider-aws.qldbStream.QldbStream.property.kinesisConfigurationInput"></a>

```python
kinesis_configuration_input: QldbStreamKinesisConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfiguration">QldbStreamKinesisConfiguration</a>

---

##### `ledger_name_input`<sup>Optional</sup> <a name="ledger_name_input" id="@cdktf/provider-aws.qldbStream.QldbStream.property.ledgerNameInput"></a>

```python
ledger_name_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-aws.qldbStream.QldbStream.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `stream_name_input`<sup>Optional</sup> <a name="stream_name_input" id="@cdktf/provider-aws.qldbStream.QldbStream.property.streamNameInput"></a>

```python
stream_name_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.qldbStream.QldbStream.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.qldbStream.QldbStream.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.qldbStream.QldbStream.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, QldbStreamTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.qldbStream.QldbStreamTimeouts">QldbStreamTimeouts</a>]

---

##### `exclusive_end_time`<sup>Required</sup> <a name="exclusive_end_time" id="@cdktf/provider-aws.qldbStream.QldbStream.property.exclusiveEndTime"></a>

```python
exclusive_end_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.qldbStream.QldbStream.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `inclusive_start_time`<sup>Required</sup> <a name="inclusive_start_time" id="@cdktf/provider-aws.qldbStream.QldbStream.property.inclusiveStartTime"></a>

```python
inclusive_start_time: str
```

- *Type:* str

---

##### `ledger_name`<sup>Required</sup> <a name="ledger_name" id="@cdktf/provider-aws.qldbStream.QldbStream.property.ledgerName"></a>

```python
ledger_name: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.qldbStream.QldbStream.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `stream_name`<sup>Required</sup> <a name="stream_name" id="@cdktf/provider-aws.qldbStream.QldbStream.property.streamName"></a>

```python
stream_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.qldbStream.QldbStream.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.qldbStream.QldbStream.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.qldbStream.QldbStream.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### QldbStreamConfig <a name="QldbStreamConfig" id="@cdktf/provider-aws.qldbStream.QldbStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.qldbStream.QldbStreamConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import qldb_stream

qldbStream.QldbStreamConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  inclusive_start_time: str,
  kinesis_configuration: QldbStreamKinesisConfiguration,
  ledger_name: str,
  role_arn: str,
  stream_name: str,
  exclusive_end_time: str = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: QldbStreamTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.inclusiveStartTime">inclusive_start_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/qldb_stream#inclusive_start_time QldbStream#inclusive_start_time}. |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.kinesisConfiguration">kinesis_configuration</a></code> | <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfiguration">QldbStreamKinesisConfiguration</a></code> | kinesis_configuration block. |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.ledgerName">ledger_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/qldb_stream#ledger_name QldbStream#ledger_name}. |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/qldb_stream#role_arn QldbStream#role_arn}. |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.streamName">stream_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/qldb_stream#stream_name QldbStream#stream_name}. |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.exclusiveEndTime">exclusive_end_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/qldb_stream#exclusive_end_time QldbStream#exclusive_end_time}. |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/qldb_stream#id QldbStream#id}. |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/qldb_stream#tags QldbStream#tags}. |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/qldb_stream#tags_all QldbStream#tags_all}. |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamTimeouts">QldbStreamTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `inclusive_start_time`<sup>Required</sup> <a name="inclusive_start_time" id="@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.inclusiveStartTime"></a>

```python
inclusive_start_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/qldb_stream#inclusive_start_time QldbStream#inclusive_start_time}.

---

##### `kinesis_configuration`<sup>Required</sup> <a name="kinesis_configuration" id="@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.kinesisConfiguration"></a>

```python
kinesis_configuration: QldbStreamKinesisConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfiguration">QldbStreamKinesisConfiguration</a>

kinesis_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/qldb_stream#kinesis_configuration QldbStream#kinesis_configuration}

---

##### `ledger_name`<sup>Required</sup> <a name="ledger_name" id="@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.ledgerName"></a>

```python
ledger_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/qldb_stream#ledger_name QldbStream#ledger_name}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/qldb_stream#role_arn QldbStream#role_arn}.

---

##### `stream_name`<sup>Required</sup> <a name="stream_name" id="@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.streamName"></a>

```python
stream_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/qldb_stream#stream_name QldbStream#stream_name}.

---

##### `exclusive_end_time`<sup>Optional</sup> <a name="exclusive_end_time" id="@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.exclusiveEndTime"></a>

```python
exclusive_end_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/qldb_stream#exclusive_end_time QldbStream#exclusive_end_time}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/qldb_stream#id QldbStream#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/qldb_stream#tags QldbStream#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/qldb_stream#tags_all QldbStream#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.timeouts"></a>

```python
timeouts: QldbStreamTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.qldbStream.QldbStreamTimeouts">QldbStreamTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/qldb_stream#timeouts QldbStream#timeouts}

---

### QldbStreamKinesisConfiguration <a name="QldbStreamKinesisConfiguration" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import qldb_stream

qldbStream.QldbStreamKinesisConfiguration(
  stream_arn: str,
  aggregation_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfiguration.property.streamArn">stream_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/qldb_stream#stream_arn QldbStream#stream_arn}. |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfiguration.property.aggregationEnabled">aggregation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/qldb_stream#aggregation_enabled QldbStream#aggregation_enabled}. |

---

##### `stream_arn`<sup>Required</sup> <a name="stream_arn" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfiguration.property.streamArn"></a>

```python
stream_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/qldb_stream#stream_arn QldbStream#stream_arn}.

---

##### `aggregation_enabled`<sup>Optional</sup> <a name="aggregation_enabled" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfiguration.property.aggregationEnabled"></a>

```python
aggregation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/qldb_stream#aggregation_enabled QldbStream#aggregation_enabled}.

---

### QldbStreamTimeouts <a name="QldbStreamTimeouts" id="@cdktf/provider-aws.qldbStream.QldbStreamTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.qldbStream.QldbStreamTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import qldb_stream

qldbStream.QldbStreamTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/qldb_stream#create QldbStream#create}. |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/qldb_stream#delete QldbStream#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.qldbStream.QldbStreamTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/qldb_stream#create QldbStream#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.qldbStream.QldbStreamTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/qldb_stream#delete QldbStream#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### QldbStreamKinesisConfigurationOutputReference <a name="QldbStreamKinesisConfigurationOutputReference" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import qldb_stream

qldbStream.QldbStreamKinesisConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.resetAggregationEnabled">reset_aggregation_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_aggregation_enabled` <a name="reset_aggregation_enabled" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.resetAggregationEnabled"></a>

```python
def reset_aggregation_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.property.aggregationEnabledInput">aggregation_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.property.streamArnInput">stream_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.property.aggregationEnabled">aggregation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.property.streamArn">stream_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfiguration">QldbStreamKinesisConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aggregation_enabled_input`<sup>Optional</sup> <a name="aggregation_enabled_input" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.property.aggregationEnabledInput"></a>

```python
aggregation_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `stream_arn_input`<sup>Optional</sup> <a name="stream_arn_input" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.property.streamArnInput"></a>

```python
stream_arn_input: str
```

- *Type:* str

---

##### `aggregation_enabled`<sup>Required</sup> <a name="aggregation_enabled" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.property.aggregationEnabled"></a>

```python
aggregation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `stream_arn`<sup>Required</sup> <a name="stream_arn" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.property.streamArn"></a>

```python
stream_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: QldbStreamKinesisConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfiguration">QldbStreamKinesisConfiguration</a>

---


### QldbStreamTimeoutsOutputReference <a name="QldbStreamTimeoutsOutputReference" id="@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import qldb_stream

qldbStream.QldbStreamTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.qldbStream.QldbStreamTimeouts">QldbStreamTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.qldbStream.QldbStreamTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, QldbStreamTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.qldbStream.QldbStreamTimeouts">QldbStreamTimeouts</a>]

---



