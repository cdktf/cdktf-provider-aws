# `keyspacesTable` Submodule <a name="`keyspacesTable` Submodule" id="@cdktf/provider-aws.keyspacesTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KeyspacesTable <a name="KeyspacesTable" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table aws_keyspaces_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import keyspaces_table

keyspacesTable.KeyspacesTable(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  keyspace_name: str,
  schema_definition: KeyspacesTableSchemaDefinition,
  table_name: str,
  capacity_specification: KeyspacesTableCapacitySpecification = None,
  comment: KeyspacesTableComment = None,
  default_time_to_live: typing.Union[int, float] = None,
  encryption_specification: KeyspacesTableEncryptionSpecification = None,
  id: str = None,
  point_in_time_recovery: KeyspacesTablePointInTimeRecovery = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: KeyspacesTableTimeouts = None,
  ttl: KeyspacesTableTtl = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.keyspaceName">keyspace_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#keyspace_name KeyspacesTable#keyspace_name}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.schemaDefinition">schema_definition</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition">KeyspacesTableSchemaDefinition</a></code> | schema_definition block. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.tableName">table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#table_name KeyspacesTable#table_name}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.capacitySpecification">capacity_specification</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification">KeyspacesTableCapacitySpecification</a></code> | capacity_specification block. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.comment">comment</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableComment">KeyspacesTableComment</a></code> | comment block. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.defaultTimeToLive">default_time_to_live</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#default_time_to_live KeyspacesTable#default_time_to_live}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.encryptionSpecification">encryption_specification</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecification">KeyspacesTableEncryptionSpecification</a></code> | encryption_specification block. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#id KeyspacesTable#id}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.pointInTimeRecovery">point_in_time_recovery</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecovery">KeyspacesTablePointInTimeRecovery</a></code> | point_in_time_recovery block. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#tags KeyspacesTable#tags}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#tags_all KeyspacesTable#tags_all}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeouts">KeyspacesTableTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.ttl">ttl</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtl">KeyspacesTableTtl</a></code> | ttl block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `keyspace_name`<sup>Required</sup> <a name="keyspace_name" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.keyspaceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#keyspace_name KeyspacesTable#keyspace_name}.

---

##### `schema_definition`<sup>Required</sup> <a name="schema_definition" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.schemaDefinition"></a>

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition">KeyspacesTableSchemaDefinition</a>

schema_definition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#schema_definition KeyspacesTable#schema_definition}

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.tableName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#table_name KeyspacesTable#table_name}.

---

##### `capacity_specification`<sup>Optional</sup> <a name="capacity_specification" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.capacitySpecification"></a>

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification">KeyspacesTableCapacitySpecification</a>

capacity_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#capacity_specification KeyspacesTable#capacity_specification}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.comment"></a>

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableComment">KeyspacesTableComment</a>

comment block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#comment KeyspacesTable#comment}

---

##### `default_time_to_live`<sup>Optional</sup> <a name="default_time_to_live" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.defaultTimeToLive"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#default_time_to_live KeyspacesTable#default_time_to_live}.

---

##### `encryption_specification`<sup>Optional</sup> <a name="encryption_specification" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.encryptionSpecification"></a>

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecification">KeyspacesTableEncryptionSpecification</a>

encryption_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#encryption_specification KeyspacesTable#encryption_specification}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#id KeyspacesTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `point_in_time_recovery`<sup>Optional</sup> <a name="point_in_time_recovery" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.pointInTimeRecovery"></a>

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecovery">KeyspacesTablePointInTimeRecovery</a>

point_in_time_recovery block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#point_in_time_recovery KeyspacesTable#point_in_time_recovery}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#tags KeyspacesTable#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#tags_all KeyspacesTable#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeouts">KeyspacesTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#timeouts KeyspacesTable#timeouts}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.ttl"></a>

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtl">KeyspacesTableTtl</a>

ttl block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#ttl KeyspacesTable#ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putCapacitySpecification">put_capacity_specification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putComment">put_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putEncryptionSpecification">put_encryption_specification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putPointInTimeRecovery">put_point_in_time_recovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putSchemaDefinition">put_schema_definition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putTtl">put_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetCapacitySpecification">reset_capacity_specification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetDefaultTimeToLive">reset_default_time_to_live</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetEncryptionSpecification">reset_encryption_specification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetPointInTimeRecovery">reset_point_in_time_recovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetTtl">reset_ttl</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_capacity_specification` <a name="put_capacity_specification" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putCapacitySpecification"></a>

```python
def put_capacity_specification(
  read_capacity_units: typing.Union[int, float] = None,
  throughput_mode: str = None,
  write_capacity_units: typing.Union[int, float] = None
) -> None
```

###### `read_capacity_units`<sup>Optional</sup> <a name="read_capacity_units" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putCapacitySpecification.parameter.readCapacityUnits"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#read_capacity_units KeyspacesTable#read_capacity_units}.

---

###### `throughput_mode`<sup>Optional</sup> <a name="throughput_mode" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putCapacitySpecification.parameter.throughputMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#throughput_mode KeyspacesTable#throughput_mode}.

---

###### `write_capacity_units`<sup>Optional</sup> <a name="write_capacity_units" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putCapacitySpecification.parameter.writeCapacityUnits"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#write_capacity_units KeyspacesTable#write_capacity_units}.

---

##### `put_comment` <a name="put_comment" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putComment"></a>

```python
def put_comment(
  message: str = None
) -> None
```

###### `message`<sup>Optional</sup> <a name="message" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putComment.parameter.message"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#message KeyspacesTable#message}.

---

##### `put_encryption_specification` <a name="put_encryption_specification" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putEncryptionSpecification"></a>

```python
def put_encryption_specification(
  kms_key_identifier: str = None,
  type: str = None
) -> None
```

###### `kms_key_identifier`<sup>Optional</sup> <a name="kms_key_identifier" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putEncryptionSpecification.parameter.kmsKeyIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#kms_key_identifier KeyspacesTable#kms_key_identifier}.

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putEncryptionSpecification.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#type KeyspacesTable#type}.

---

##### `put_point_in_time_recovery` <a name="put_point_in_time_recovery" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putPointInTimeRecovery"></a>

```python
def put_point_in_time_recovery(
  status: str = None
) -> None
```

###### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putPointInTimeRecovery.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#status KeyspacesTable#status}.

---

##### `put_schema_definition` <a name="put_schema_definition" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putSchemaDefinition"></a>

```python
def put_schema_definition(
  column: typing.Union[IResolvable, typing.List[KeyspacesTableSchemaDefinitionColumn]],
  partition_key: typing.Union[IResolvable, typing.List[KeyspacesTableSchemaDefinitionPartitionKey]],
  clustering_key: typing.Union[IResolvable, typing.List[KeyspacesTableSchemaDefinitionClusteringKey]] = None,
  static_column: typing.Union[IResolvable, typing.List[KeyspacesTableSchemaDefinitionStaticColumn]] = None
) -> None
```

###### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putSchemaDefinition.parameter.column"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumn">KeyspacesTableSchemaDefinitionColumn</a>]]

column block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#column KeyspacesTable#column}

---

###### `partition_key`<sup>Required</sup> <a name="partition_key" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putSchemaDefinition.parameter.partitionKey"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKey">KeyspacesTableSchemaDefinitionPartitionKey</a>]]

partition_key block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#partition_key KeyspacesTable#partition_key}

---

###### `clustering_key`<sup>Optional</sup> <a name="clustering_key" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putSchemaDefinition.parameter.clusteringKey"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKey">KeyspacesTableSchemaDefinitionClusteringKey</a>]]

clustering_key block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#clustering_key KeyspacesTable#clustering_key}

---

###### `static_column`<sup>Optional</sup> <a name="static_column" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putSchemaDefinition.parameter.staticColumn"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumn">KeyspacesTableSchemaDefinitionStaticColumn</a>]]

static_column block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#static_column KeyspacesTable#static_column}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#create KeyspacesTable#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#delete KeyspacesTable#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#update KeyspacesTable#update}.

---

##### `put_ttl` <a name="put_ttl" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putTtl"></a>

```python
def put_ttl(
  status: str
) -> None
```

###### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putTtl.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#status KeyspacesTable#status}.

---

##### `reset_capacity_specification` <a name="reset_capacity_specification" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetCapacitySpecification"></a>

```python
def reset_capacity_specification() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_default_time_to_live` <a name="reset_default_time_to_live" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetDefaultTimeToLive"></a>

```python
def reset_default_time_to_live() -> None
```

##### `reset_encryption_specification` <a name="reset_encryption_specification" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetEncryptionSpecification"></a>

```python
def reset_encryption_specification() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_point_in_time_recovery` <a name="reset_point_in_time_recovery" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetPointInTimeRecovery"></a>

```python
def reset_point_in_time_recovery() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_ttl` <a name="reset_ttl" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetTtl"></a>

```python
def reset_ttl() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import keyspaces_table

keyspacesTable.KeyspacesTable.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import keyspaces_table

keyspacesTable.KeyspacesTable.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import keyspaces_table

keyspacesTable.KeyspacesTable.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.capacitySpecification">capacity_specification</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference">KeyspacesTableCapacitySpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.comment">comment</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference">KeyspacesTableCommentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.encryptionSpecification">encryption_specification</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference">KeyspacesTableEncryptionSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.pointInTimeRecovery">point_in_time_recovery</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference">KeyspacesTablePointInTimeRecoveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.schemaDefinition">schema_definition</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference">KeyspacesTableSchemaDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference">KeyspacesTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.ttl">ttl</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference">KeyspacesTableTtlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.capacitySpecificationInput">capacity_specification_input</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification">KeyspacesTableCapacitySpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.commentInput">comment_input</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableComment">KeyspacesTableComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.defaultTimeToLiveInput">default_time_to_live_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.encryptionSpecificationInput">encryption_specification_input</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecification">KeyspacesTableEncryptionSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.keyspaceNameInput">keyspace_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.pointInTimeRecoveryInput">point_in_time_recovery_input</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecovery">KeyspacesTablePointInTimeRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.schemaDefinitionInput">schema_definition_input</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition">KeyspacesTableSchemaDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeouts">KeyspacesTableTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.ttlInput">ttl_input</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtl">KeyspacesTableTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.defaultTimeToLive">default_time_to_live</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.keyspaceName">keyspace_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `capacity_specification`<sup>Required</sup> <a name="capacity_specification" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.capacitySpecification"></a>

```python
capacity_specification: KeyspacesTableCapacitySpecificationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference">KeyspacesTableCapacitySpecificationOutputReference</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.comment"></a>

```python
comment: KeyspacesTableCommentOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference">KeyspacesTableCommentOutputReference</a>

---

##### `encryption_specification`<sup>Required</sup> <a name="encryption_specification" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.encryptionSpecification"></a>

```python
encryption_specification: KeyspacesTableEncryptionSpecificationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference">KeyspacesTableEncryptionSpecificationOutputReference</a>

---

##### `point_in_time_recovery`<sup>Required</sup> <a name="point_in_time_recovery" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.pointInTimeRecovery"></a>

```python
point_in_time_recovery: KeyspacesTablePointInTimeRecoveryOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference">KeyspacesTablePointInTimeRecoveryOutputReference</a>

---

##### `schema_definition`<sup>Required</sup> <a name="schema_definition" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.schemaDefinition"></a>

```python
schema_definition: KeyspacesTableSchemaDefinitionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference">KeyspacesTableSchemaDefinitionOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.timeouts"></a>

```python
timeouts: KeyspacesTableTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference">KeyspacesTableTimeoutsOutputReference</a>

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.ttl"></a>

```python
ttl: KeyspacesTableTtlOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference">KeyspacesTableTtlOutputReference</a>

---

##### `capacity_specification_input`<sup>Optional</sup> <a name="capacity_specification_input" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.capacitySpecificationInput"></a>

```python
capacity_specification_input: KeyspacesTableCapacitySpecification
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification">KeyspacesTableCapacitySpecification</a>

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.commentInput"></a>

```python
comment_input: KeyspacesTableComment
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableComment">KeyspacesTableComment</a>

---

##### `default_time_to_live_input`<sup>Optional</sup> <a name="default_time_to_live_input" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.defaultTimeToLiveInput"></a>

```python
default_time_to_live_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `encryption_specification_input`<sup>Optional</sup> <a name="encryption_specification_input" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.encryptionSpecificationInput"></a>

```python
encryption_specification_input: KeyspacesTableEncryptionSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecification">KeyspacesTableEncryptionSpecification</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `keyspace_name_input`<sup>Optional</sup> <a name="keyspace_name_input" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.keyspaceNameInput"></a>

```python
keyspace_name_input: str
```

- *Type:* str

---

##### `point_in_time_recovery_input`<sup>Optional</sup> <a name="point_in_time_recovery_input" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.pointInTimeRecoveryInput"></a>

```python
point_in_time_recovery_input: KeyspacesTablePointInTimeRecovery
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecovery">KeyspacesTablePointInTimeRecovery</a>

---

##### `schema_definition_input`<sup>Optional</sup> <a name="schema_definition_input" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.schemaDefinitionInput"></a>

```python
schema_definition_input: KeyspacesTableSchemaDefinition
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition">KeyspacesTableSchemaDefinition</a>

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[KeyspacesTableTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeouts">KeyspacesTableTimeouts</a>, cdktf.IResolvable]

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.ttlInput"></a>

```python
ttl_input: KeyspacesTableTtl
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtl">KeyspacesTableTtl</a>

---

##### `default_time_to_live`<sup>Required</sup> <a name="default_time_to_live" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.defaultTimeToLive"></a>

```python
default_time_to_live: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `keyspace_name`<sup>Required</sup> <a name="keyspace_name" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.keyspaceName"></a>

```python
keyspace_name: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### KeyspacesTableCapacitySpecification <a name="KeyspacesTableCapacitySpecification" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import keyspaces_table

keyspacesTable.KeyspacesTableCapacitySpecification(
  read_capacity_units: typing.Union[int, float] = None,
  throughput_mode: str = None,
  write_capacity_units: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification.property.readCapacityUnits">read_capacity_units</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#read_capacity_units KeyspacesTable#read_capacity_units}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification.property.throughputMode">throughput_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#throughput_mode KeyspacesTable#throughput_mode}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification.property.writeCapacityUnits">write_capacity_units</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#write_capacity_units KeyspacesTable#write_capacity_units}. |

---

##### `read_capacity_units`<sup>Optional</sup> <a name="read_capacity_units" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification.property.readCapacityUnits"></a>

```python
read_capacity_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#read_capacity_units KeyspacesTable#read_capacity_units}.

---

##### `throughput_mode`<sup>Optional</sup> <a name="throughput_mode" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification.property.throughputMode"></a>

```python
throughput_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#throughput_mode KeyspacesTable#throughput_mode}.

---

##### `write_capacity_units`<sup>Optional</sup> <a name="write_capacity_units" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification.property.writeCapacityUnits"></a>

```python
write_capacity_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#write_capacity_units KeyspacesTable#write_capacity_units}.

---

### KeyspacesTableComment <a name="KeyspacesTableComment" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableComment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableComment.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import keyspaces_table

keyspacesTable.KeyspacesTableComment(
  message: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableComment.property.message">message</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#message KeyspacesTable#message}. |

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableComment.property.message"></a>

```python
message: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#message KeyspacesTable#message}.

---

### KeyspacesTableConfig <a name="KeyspacesTableConfig" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import keyspaces_table

keyspacesTable.KeyspacesTableConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  keyspace_name: str,
  schema_definition: KeyspacesTableSchemaDefinition,
  table_name: str,
  capacity_specification: KeyspacesTableCapacitySpecification = None,
  comment: KeyspacesTableComment = None,
  default_time_to_live: typing.Union[int, float] = None,
  encryption_specification: KeyspacesTableEncryptionSpecification = None,
  id: str = None,
  point_in_time_recovery: KeyspacesTablePointInTimeRecovery = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: KeyspacesTableTimeouts = None,
  ttl: KeyspacesTableTtl = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.keyspaceName">keyspace_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#keyspace_name KeyspacesTable#keyspace_name}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.schemaDefinition">schema_definition</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition">KeyspacesTableSchemaDefinition</a></code> | schema_definition block. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.tableName">table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#table_name KeyspacesTable#table_name}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.capacitySpecification">capacity_specification</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification">KeyspacesTableCapacitySpecification</a></code> | capacity_specification block. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.comment">comment</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableComment">KeyspacesTableComment</a></code> | comment block. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.defaultTimeToLive">default_time_to_live</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#default_time_to_live KeyspacesTable#default_time_to_live}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.encryptionSpecification">encryption_specification</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecification">KeyspacesTableEncryptionSpecification</a></code> | encryption_specification block. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#id KeyspacesTable#id}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.pointInTimeRecovery">point_in_time_recovery</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecovery">KeyspacesTablePointInTimeRecovery</a></code> | point_in_time_recovery block. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#tags KeyspacesTable#tags}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#tags_all KeyspacesTable#tags_all}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeouts">KeyspacesTableTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.ttl">ttl</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtl">KeyspacesTableTtl</a></code> | ttl block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `keyspace_name`<sup>Required</sup> <a name="keyspace_name" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.keyspaceName"></a>

```python
keyspace_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#keyspace_name KeyspacesTable#keyspace_name}.

---

##### `schema_definition`<sup>Required</sup> <a name="schema_definition" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.schemaDefinition"></a>

```python
schema_definition: KeyspacesTableSchemaDefinition
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition">KeyspacesTableSchemaDefinition</a>

schema_definition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#schema_definition KeyspacesTable#schema_definition}

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#table_name KeyspacesTable#table_name}.

---

##### `capacity_specification`<sup>Optional</sup> <a name="capacity_specification" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.capacitySpecification"></a>

```python
capacity_specification: KeyspacesTableCapacitySpecification
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification">KeyspacesTableCapacitySpecification</a>

capacity_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#capacity_specification KeyspacesTable#capacity_specification}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.comment"></a>

```python
comment: KeyspacesTableComment
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableComment">KeyspacesTableComment</a>

comment block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#comment KeyspacesTable#comment}

---

##### `default_time_to_live`<sup>Optional</sup> <a name="default_time_to_live" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.defaultTimeToLive"></a>

```python
default_time_to_live: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#default_time_to_live KeyspacesTable#default_time_to_live}.

---

##### `encryption_specification`<sup>Optional</sup> <a name="encryption_specification" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.encryptionSpecification"></a>

```python
encryption_specification: KeyspacesTableEncryptionSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecification">KeyspacesTableEncryptionSpecification</a>

encryption_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#encryption_specification KeyspacesTable#encryption_specification}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#id KeyspacesTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `point_in_time_recovery`<sup>Optional</sup> <a name="point_in_time_recovery" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.pointInTimeRecovery"></a>

```python
point_in_time_recovery: KeyspacesTablePointInTimeRecovery
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecovery">KeyspacesTablePointInTimeRecovery</a>

point_in_time_recovery block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#point_in_time_recovery KeyspacesTable#point_in_time_recovery}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#tags KeyspacesTable#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#tags_all KeyspacesTable#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.timeouts"></a>

```python
timeouts: KeyspacesTableTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeouts">KeyspacesTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#timeouts KeyspacesTable#timeouts}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.ttl"></a>

```python
ttl: KeyspacesTableTtl
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtl">KeyspacesTableTtl</a>

ttl block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#ttl KeyspacesTable#ttl}

---

### KeyspacesTableEncryptionSpecification <a name="KeyspacesTableEncryptionSpecification" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecification.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import keyspaces_table

keyspacesTable.KeyspacesTableEncryptionSpecification(
  kms_key_identifier: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecification.property.kmsKeyIdentifier">kms_key_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#kms_key_identifier KeyspacesTable#kms_key_identifier}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecification.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#type KeyspacesTable#type}. |

---

##### `kms_key_identifier`<sup>Optional</sup> <a name="kms_key_identifier" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecification.property.kmsKeyIdentifier"></a>

```python
kms_key_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#kms_key_identifier KeyspacesTable#kms_key_identifier}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecification.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#type KeyspacesTable#type}.

---

### KeyspacesTablePointInTimeRecovery <a name="KeyspacesTablePointInTimeRecovery" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecovery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecovery.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import keyspaces_table

keyspacesTable.KeyspacesTablePointInTimeRecovery(
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecovery.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#status KeyspacesTable#status}. |

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecovery.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#status KeyspacesTable#status}.

---

### KeyspacesTableSchemaDefinition <a name="KeyspacesTableSchemaDefinition" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import keyspaces_table

keyspacesTable.KeyspacesTableSchemaDefinition(
  column: typing.Union[IResolvable, typing.List[KeyspacesTableSchemaDefinitionColumn]],
  partition_key: typing.Union[IResolvable, typing.List[KeyspacesTableSchemaDefinitionPartitionKey]],
  clustering_key: typing.Union[IResolvable, typing.List[KeyspacesTableSchemaDefinitionClusteringKey]] = None,
  static_column: typing.Union[IResolvable, typing.List[KeyspacesTableSchemaDefinitionStaticColumn]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition.property.column">column</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumn">KeyspacesTableSchemaDefinitionColumn</a>]]</code> | column block. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition.property.partitionKey">partition_key</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKey">KeyspacesTableSchemaDefinitionPartitionKey</a>]]</code> | partition_key block. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition.property.clusteringKey">clustering_key</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKey">KeyspacesTableSchemaDefinitionClusteringKey</a>]]</code> | clustering_key block. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition.property.staticColumn">static_column</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumn">KeyspacesTableSchemaDefinitionStaticColumn</a>]]</code> | static_column block. |

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition.property.column"></a>

```python
column: typing.Union[IResolvable, typing.List[KeyspacesTableSchemaDefinitionColumn]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumn">KeyspacesTableSchemaDefinitionColumn</a>]]

column block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#column KeyspacesTable#column}

---

##### `partition_key`<sup>Required</sup> <a name="partition_key" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition.property.partitionKey"></a>

```python
partition_key: typing.Union[IResolvable, typing.List[KeyspacesTableSchemaDefinitionPartitionKey]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKey">KeyspacesTableSchemaDefinitionPartitionKey</a>]]

partition_key block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#partition_key KeyspacesTable#partition_key}

---

##### `clustering_key`<sup>Optional</sup> <a name="clustering_key" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition.property.clusteringKey"></a>

```python
clustering_key: typing.Union[IResolvable, typing.List[KeyspacesTableSchemaDefinitionClusteringKey]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKey">KeyspacesTableSchemaDefinitionClusteringKey</a>]]

clustering_key block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#clustering_key KeyspacesTable#clustering_key}

---

##### `static_column`<sup>Optional</sup> <a name="static_column" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition.property.staticColumn"></a>

```python
static_column: typing.Union[IResolvable, typing.List[KeyspacesTableSchemaDefinitionStaticColumn]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumn">KeyspacesTableSchemaDefinitionStaticColumn</a>]]

static_column block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#static_column KeyspacesTable#static_column}

---

### KeyspacesTableSchemaDefinitionClusteringKey <a name="KeyspacesTableSchemaDefinitionClusteringKey" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKey.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import keyspaces_table

keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKey(
  name: str,
  order_by: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKey.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#name KeyspacesTable#name}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKey.property.orderBy">order_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#order_by KeyspacesTable#order_by}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKey.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#name KeyspacesTable#name}.

---

##### `order_by`<sup>Required</sup> <a name="order_by" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKey.property.orderBy"></a>

```python
order_by: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#order_by KeyspacesTable#order_by}.

---

### KeyspacesTableSchemaDefinitionColumn <a name="KeyspacesTableSchemaDefinitionColumn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumn.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import keyspaces_table

keyspacesTable.KeyspacesTableSchemaDefinitionColumn(
  name: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumn.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#name KeyspacesTable#name}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumn.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#type KeyspacesTable#type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumn.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#name KeyspacesTable#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumn.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#type KeyspacesTable#type}.

---

### KeyspacesTableSchemaDefinitionPartitionKey <a name="KeyspacesTableSchemaDefinitionPartitionKey" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKey.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import keyspaces_table

keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKey(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKey.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#name KeyspacesTable#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKey.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#name KeyspacesTable#name}.

---

### KeyspacesTableSchemaDefinitionStaticColumn <a name="KeyspacesTableSchemaDefinitionStaticColumn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumn.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import keyspaces_table

keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumn(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumn.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#name KeyspacesTable#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumn.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#name KeyspacesTable#name}.

---

### KeyspacesTableTimeouts <a name="KeyspacesTableTimeouts" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import keyspaces_table

keyspacesTable.KeyspacesTableTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#create KeyspacesTable#create}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#delete KeyspacesTable#delete}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#update KeyspacesTable#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#create KeyspacesTable#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#delete KeyspacesTable#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#update KeyspacesTable#update}.

---

### KeyspacesTableTtl <a name="KeyspacesTableTtl" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtl.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import keyspaces_table

keyspacesTable.KeyspacesTableTtl(
  status: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtl.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#status KeyspacesTable#status}. |

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtl.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#status KeyspacesTable#status}.

---

## Classes <a name="Classes" id="Classes"></a>

### KeyspacesTableCapacitySpecificationOutputReference <a name="KeyspacesTableCapacitySpecificationOutputReference" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import keyspaces_table

keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.resetReadCapacityUnits">reset_read_capacity_units</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.resetThroughputMode">reset_throughput_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.resetWriteCapacityUnits">reset_write_capacity_units</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read_capacity_units` <a name="reset_read_capacity_units" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.resetReadCapacityUnits"></a>

```python
def reset_read_capacity_units() -> None
```

##### `reset_throughput_mode` <a name="reset_throughput_mode" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.resetThroughputMode"></a>

```python
def reset_throughput_mode() -> None
```

##### `reset_write_capacity_units` <a name="reset_write_capacity_units" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.resetWriteCapacityUnits"></a>

```python
def reset_write_capacity_units() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.readCapacityUnitsInput">read_capacity_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.throughputModeInput">throughput_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.writeCapacityUnitsInput">write_capacity_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.readCapacityUnits">read_capacity_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.throughputMode">throughput_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.writeCapacityUnits">write_capacity_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification">KeyspacesTableCapacitySpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_capacity_units_input`<sup>Optional</sup> <a name="read_capacity_units_input" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.readCapacityUnitsInput"></a>

```python
read_capacity_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throughput_mode_input`<sup>Optional</sup> <a name="throughput_mode_input" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.throughputModeInput"></a>

```python
throughput_mode_input: str
```

- *Type:* str

---

##### `write_capacity_units_input`<sup>Optional</sup> <a name="write_capacity_units_input" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.writeCapacityUnitsInput"></a>

```python
write_capacity_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `read_capacity_units`<sup>Required</sup> <a name="read_capacity_units" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.readCapacityUnits"></a>

```python
read_capacity_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throughput_mode`<sup>Required</sup> <a name="throughput_mode" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.throughputMode"></a>

```python
throughput_mode: str
```

- *Type:* str

---

##### `write_capacity_units`<sup>Required</sup> <a name="write_capacity_units" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.writeCapacityUnits"></a>

```python
write_capacity_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.internalValue"></a>

```python
internal_value: KeyspacesTableCapacitySpecification
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification">KeyspacesTableCapacitySpecification</a>

---


### KeyspacesTableCommentOutputReference <a name="KeyspacesTableCommentOutputReference" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import keyspaces_table

keyspacesTable.KeyspacesTableCommentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.resetMessage">reset_message</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_message` <a name="reset_message" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.resetMessage"></a>

```python
def reset_message() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.property.messageInput">message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableComment">KeyspacesTableComment</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message_input`<sup>Optional</sup> <a name="message_input" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.property.messageInput"></a>

```python
message_input: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.property.internalValue"></a>

```python
internal_value: KeyspacesTableComment
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableComment">KeyspacesTableComment</a>

---


### KeyspacesTableEncryptionSpecificationOutputReference <a name="KeyspacesTableEncryptionSpecificationOutputReference" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import keyspaces_table

keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.resetKmsKeyIdentifier">reset_kms_key_identifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_identifier` <a name="reset_kms_key_identifier" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.resetKmsKeyIdentifier"></a>

```python
def reset_kms_key_identifier() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.property.kmsKeyIdentifierInput">kms_key_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.property.kmsKeyIdentifier">kms_key_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecification">KeyspacesTableEncryptionSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_identifier_input`<sup>Optional</sup> <a name="kms_key_identifier_input" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.property.kmsKeyIdentifierInput"></a>

```python
kms_key_identifier_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `kms_key_identifier`<sup>Required</sup> <a name="kms_key_identifier" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.property.kmsKeyIdentifier"></a>

```python
kms_key_identifier: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: KeyspacesTableEncryptionSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecification">KeyspacesTableEncryptionSpecification</a>

---


### KeyspacesTablePointInTimeRecoveryOutputReference <a name="KeyspacesTablePointInTimeRecoveryOutputReference" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import keyspaces_table

keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.resetStatus">reset_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_status` <a name="reset_status" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecovery">KeyspacesTablePointInTimeRecovery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.property.internalValue"></a>

```python
internal_value: KeyspacesTablePointInTimeRecovery
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecovery">KeyspacesTablePointInTimeRecovery</a>

---


### KeyspacesTableSchemaDefinitionClusteringKeyList <a name="KeyspacesTableSchemaDefinitionClusteringKeyList" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import keyspaces_table

keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> KeyspacesTableSchemaDefinitionClusteringKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKey">KeyspacesTableSchemaDefinitionClusteringKey</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[KeyspacesTableSchemaDefinitionClusteringKey]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKey">KeyspacesTableSchemaDefinitionClusteringKey</a>]]

---


### KeyspacesTableSchemaDefinitionClusteringKeyOutputReference <a name="KeyspacesTableSchemaDefinitionClusteringKeyOutputReference" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import keyspaces_table

keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.property.orderByInput">order_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.property.orderBy">order_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKey">KeyspacesTableSchemaDefinitionClusteringKey</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `order_by_input`<sup>Optional</sup> <a name="order_by_input" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.property.orderByInput"></a>

```python
order_by_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `order_by`<sup>Required</sup> <a name="order_by" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.property.orderBy"></a>

```python
order_by: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[KeyspacesTableSchemaDefinitionClusteringKey, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKey">KeyspacesTableSchemaDefinitionClusteringKey</a>, cdktf.IResolvable]

---


### KeyspacesTableSchemaDefinitionColumnList <a name="KeyspacesTableSchemaDefinitionColumnList" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import keyspaces_table

keyspacesTable.KeyspacesTableSchemaDefinitionColumnList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> KeyspacesTableSchemaDefinitionColumnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumn">KeyspacesTableSchemaDefinitionColumn</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[KeyspacesTableSchemaDefinitionColumn]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumn">KeyspacesTableSchemaDefinitionColumn</a>]]

---


### KeyspacesTableSchemaDefinitionColumnOutputReference <a name="KeyspacesTableSchemaDefinitionColumnOutputReference" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import keyspaces_table

keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumn">KeyspacesTableSchemaDefinitionColumn</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[KeyspacesTableSchemaDefinitionColumn, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumn">KeyspacesTableSchemaDefinitionColumn</a>, cdktf.IResolvable]

---


### KeyspacesTableSchemaDefinitionOutputReference <a name="KeyspacesTableSchemaDefinitionOutputReference" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import keyspaces_table

keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.putClusteringKey">put_clustering_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.putColumn">put_column</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.putPartitionKey">put_partition_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.putStaticColumn">put_static_column</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.resetClusteringKey">reset_clustering_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.resetStaticColumn">reset_static_column</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_clustering_key` <a name="put_clustering_key" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.putClusteringKey"></a>

```python
def put_clustering_key(
  value: typing.Union[IResolvable, typing.List[KeyspacesTableSchemaDefinitionClusteringKey]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.putClusteringKey.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKey">KeyspacesTableSchemaDefinitionClusteringKey</a>]]

---

##### `put_column` <a name="put_column" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.putColumn"></a>

```python
def put_column(
  value: typing.Union[IResolvable, typing.List[KeyspacesTableSchemaDefinitionColumn]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.putColumn.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumn">KeyspacesTableSchemaDefinitionColumn</a>]]

---

##### `put_partition_key` <a name="put_partition_key" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.putPartitionKey"></a>

```python
def put_partition_key(
  value: typing.Union[IResolvable, typing.List[KeyspacesTableSchemaDefinitionPartitionKey]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.putPartitionKey.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKey">KeyspacesTableSchemaDefinitionPartitionKey</a>]]

---

##### `put_static_column` <a name="put_static_column" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.putStaticColumn"></a>

```python
def put_static_column(
  value: typing.Union[IResolvable, typing.List[KeyspacesTableSchemaDefinitionStaticColumn]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.putStaticColumn.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumn">KeyspacesTableSchemaDefinitionStaticColumn</a>]]

---

##### `reset_clustering_key` <a name="reset_clustering_key" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.resetClusteringKey"></a>

```python
def reset_clustering_key() -> None
```

##### `reset_static_column` <a name="reset_static_column" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.resetStaticColumn"></a>

```python
def reset_static_column() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.clusteringKey">clustering_key</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList">KeyspacesTableSchemaDefinitionClusteringKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.column">column</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList">KeyspacesTableSchemaDefinitionColumnList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.partitionKey">partition_key</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList">KeyspacesTableSchemaDefinitionPartitionKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.staticColumn">static_column</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList">KeyspacesTableSchemaDefinitionStaticColumnList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.clusteringKeyInput">clustering_key_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKey">KeyspacesTableSchemaDefinitionClusteringKey</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.columnInput">column_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumn">KeyspacesTableSchemaDefinitionColumn</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.partitionKeyInput">partition_key_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKey">KeyspacesTableSchemaDefinitionPartitionKey</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.staticColumnInput">static_column_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumn">KeyspacesTableSchemaDefinitionStaticColumn</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition">KeyspacesTableSchemaDefinition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `clustering_key`<sup>Required</sup> <a name="clustering_key" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.clusteringKey"></a>

```python
clustering_key: KeyspacesTableSchemaDefinitionClusteringKeyList
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList">KeyspacesTableSchemaDefinitionClusteringKeyList</a>

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.column"></a>

```python
column: KeyspacesTableSchemaDefinitionColumnList
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList">KeyspacesTableSchemaDefinitionColumnList</a>

---

##### `partition_key`<sup>Required</sup> <a name="partition_key" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.partitionKey"></a>

```python
partition_key: KeyspacesTableSchemaDefinitionPartitionKeyList
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList">KeyspacesTableSchemaDefinitionPartitionKeyList</a>

---

##### `static_column`<sup>Required</sup> <a name="static_column" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.staticColumn"></a>

```python
static_column: KeyspacesTableSchemaDefinitionStaticColumnList
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList">KeyspacesTableSchemaDefinitionStaticColumnList</a>

---

##### `clustering_key_input`<sup>Optional</sup> <a name="clustering_key_input" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.clusteringKeyInput"></a>

```python
clustering_key_input: typing.Union[IResolvable, typing.List[KeyspacesTableSchemaDefinitionClusteringKey]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKey">KeyspacesTableSchemaDefinitionClusteringKey</a>]]

---

##### `column_input`<sup>Optional</sup> <a name="column_input" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.columnInput"></a>

```python
column_input: typing.Union[IResolvable, typing.List[KeyspacesTableSchemaDefinitionColumn]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumn">KeyspacesTableSchemaDefinitionColumn</a>]]

---

##### `partition_key_input`<sup>Optional</sup> <a name="partition_key_input" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.partitionKeyInput"></a>

```python
partition_key_input: typing.Union[IResolvable, typing.List[KeyspacesTableSchemaDefinitionPartitionKey]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKey">KeyspacesTableSchemaDefinitionPartitionKey</a>]]

---

##### `static_column_input`<sup>Optional</sup> <a name="static_column_input" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.staticColumnInput"></a>

```python
static_column_input: typing.Union[IResolvable, typing.List[KeyspacesTableSchemaDefinitionStaticColumn]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumn">KeyspacesTableSchemaDefinitionStaticColumn</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.internalValue"></a>

```python
internal_value: KeyspacesTableSchemaDefinition
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition">KeyspacesTableSchemaDefinition</a>

---


### KeyspacesTableSchemaDefinitionPartitionKeyList <a name="KeyspacesTableSchemaDefinitionPartitionKeyList" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import keyspaces_table

keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> KeyspacesTableSchemaDefinitionPartitionKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKey">KeyspacesTableSchemaDefinitionPartitionKey</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[KeyspacesTableSchemaDefinitionPartitionKey]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKey">KeyspacesTableSchemaDefinitionPartitionKey</a>]]

---


### KeyspacesTableSchemaDefinitionPartitionKeyOutputReference <a name="KeyspacesTableSchemaDefinitionPartitionKeyOutputReference" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import keyspaces_table

keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKey">KeyspacesTableSchemaDefinitionPartitionKey</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[KeyspacesTableSchemaDefinitionPartitionKey, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKey">KeyspacesTableSchemaDefinitionPartitionKey</a>, cdktf.IResolvable]

---


### KeyspacesTableSchemaDefinitionStaticColumnList <a name="KeyspacesTableSchemaDefinitionStaticColumnList" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import keyspaces_table

keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> KeyspacesTableSchemaDefinitionStaticColumnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumn">KeyspacesTableSchemaDefinitionStaticColumn</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[KeyspacesTableSchemaDefinitionStaticColumn]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumn">KeyspacesTableSchemaDefinitionStaticColumn</a>]]

---


### KeyspacesTableSchemaDefinitionStaticColumnOutputReference <a name="KeyspacesTableSchemaDefinitionStaticColumnOutputReference" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import keyspaces_table

keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumn">KeyspacesTableSchemaDefinitionStaticColumn</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[KeyspacesTableSchemaDefinitionStaticColumn, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumn">KeyspacesTableSchemaDefinitionStaticColumn</a>, cdktf.IResolvable]

---


### KeyspacesTableTimeoutsOutputReference <a name="KeyspacesTableTimeoutsOutputReference" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import keyspaces_table

keyspacesTable.KeyspacesTableTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeouts">KeyspacesTableTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[KeyspacesTableTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeouts">KeyspacesTableTimeouts</a>, cdktf.IResolvable]

---


### KeyspacesTableTtlOutputReference <a name="KeyspacesTableTtlOutputReference" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import keyspaces_table

keyspacesTable.KeyspacesTableTtlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtl">KeyspacesTableTtl</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.property.internalValue"></a>

```python
internal_value: KeyspacesTableTtl
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtl">KeyspacesTableTtl</a>

---



