# `dmsReplicationTask` Submodule <a name="`dmsReplicationTask` Submodule" id="@cdktf/provider-aws.dmsReplicationTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsReplicationTask <a name="DmsReplicationTask" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task aws_dms_replication_task}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dms_replication_task

dmsReplicationTask.DmsReplicationTask(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  migration_type: str,
  replication_instance_arn: str,
  replication_task_id: str,
  source_endpoint_arn: str,
  table_mappings: str,
  target_endpoint_arn: str,
  cdc_start_position: str = None,
  cdc_start_time: str = None,
  id: str = None,
  replication_task_settings: str = None,
  start_replication_task: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.migrationType">migration_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#migration_type DmsReplicationTask#migration_type}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.replicationInstanceArn">replication_instance_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#replication_instance_arn DmsReplicationTask#replication_instance_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.replicationTaskId">replication_task_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#replication_task_id DmsReplicationTask#replication_task_id}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.sourceEndpointArn">source_endpoint_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#source_endpoint_arn DmsReplicationTask#source_endpoint_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.tableMappings">table_mappings</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#table_mappings DmsReplicationTask#table_mappings}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.targetEndpointArn">target_endpoint_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#target_endpoint_arn DmsReplicationTask#target_endpoint_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.cdcStartPosition">cdc_start_position</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#cdc_start_position DmsReplicationTask#cdc_start_position}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.cdcStartTime">cdc_start_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#cdc_start_time DmsReplicationTask#cdc_start_time}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#id DmsReplicationTask#id}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.replicationTaskSettings">replication_task_settings</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#replication_task_settings DmsReplicationTask#replication_task_settings}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.startReplicationTask">start_replication_task</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#start_replication_task DmsReplicationTask#start_replication_task}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#tags DmsReplicationTask#tags}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#tags_all DmsReplicationTask#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `migration_type`<sup>Required</sup> <a name="migration_type" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.migrationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#migration_type DmsReplicationTask#migration_type}.

---

##### `replication_instance_arn`<sup>Required</sup> <a name="replication_instance_arn" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.replicationInstanceArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#replication_instance_arn DmsReplicationTask#replication_instance_arn}.

---

##### `replication_task_id`<sup>Required</sup> <a name="replication_task_id" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.replicationTaskId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#replication_task_id DmsReplicationTask#replication_task_id}.

---

##### `source_endpoint_arn`<sup>Required</sup> <a name="source_endpoint_arn" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.sourceEndpointArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#source_endpoint_arn DmsReplicationTask#source_endpoint_arn}.

---

##### `table_mappings`<sup>Required</sup> <a name="table_mappings" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.tableMappings"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#table_mappings DmsReplicationTask#table_mappings}.

---

##### `target_endpoint_arn`<sup>Required</sup> <a name="target_endpoint_arn" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.targetEndpointArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#target_endpoint_arn DmsReplicationTask#target_endpoint_arn}.

---

##### `cdc_start_position`<sup>Optional</sup> <a name="cdc_start_position" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.cdcStartPosition"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#cdc_start_position DmsReplicationTask#cdc_start_position}.

---

##### `cdc_start_time`<sup>Optional</sup> <a name="cdc_start_time" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.cdcStartTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#cdc_start_time DmsReplicationTask#cdc_start_time}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#id DmsReplicationTask#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `replication_task_settings`<sup>Optional</sup> <a name="replication_task_settings" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.replicationTaskSettings"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#replication_task_settings DmsReplicationTask#replication_task_settings}.

---

##### `start_replication_task`<sup>Optional</sup> <a name="start_replication_task" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.startReplicationTask"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#start_replication_task DmsReplicationTask#start_replication_task}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#tags DmsReplicationTask#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#tags_all DmsReplicationTask#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetCdcStartPosition">reset_cdc_start_position</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetCdcStartTime">reset_cdc_start_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetReplicationTaskSettings">reset_replication_task_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetStartReplicationTask">reset_start_replication_task</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_cdc_start_position` <a name="reset_cdc_start_position" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetCdcStartPosition"></a>

```python
def reset_cdc_start_position() -> None
```

##### `reset_cdc_start_time` <a name="reset_cdc_start_time" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetCdcStartTime"></a>

```python
def reset_cdc_start_time() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_replication_task_settings` <a name="reset_replication_task_settings" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetReplicationTaskSettings"></a>

```python
def reset_replication_task_settings() -> None
```

##### `reset_start_replication_task` <a name="reset_start_replication_task" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetStartReplicationTask"></a>

```python
def reset_start_replication_task() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import dms_replication_task

dmsReplicationTask.DmsReplicationTask.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import dms_replication_task

dmsReplicationTask.DmsReplicationTask.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import dms_replication_task

dmsReplicationTask.DmsReplicationTask.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.replicationTaskArn">replication_task_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.cdcStartPositionInput">cdc_start_position_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.cdcStartTimeInput">cdc_start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.migrationTypeInput">migration_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.replicationInstanceArnInput">replication_instance_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.replicationTaskIdInput">replication_task_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.replicationTaskSettingsInput">replication_task_settings_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.sourceEndpointArnInput">source_endpoint_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.startReplicationTaskInput">start_replication_task_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.tableMappingsInput">table_mappings_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.targetEndpointArnInput">target_endpoint_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.cdcStartPosition">cdc_start_position</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.cdcStartTime">cdc_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.migrationType">migration_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.replicationInstanceArn">replication_instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.replicationTaskId">replication_task_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.replicationTaskSettings">replication_task_settings</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.sourceEndpointArn">source_endpoint_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.startReplicationTask">start_replication_task</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.tableMappings">table_mappings</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.targetEndpointArn">target_endpoint_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `replication_task_arn`<sup>Required</sup> <a name="replication_task_arn" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.replicationTaskArn"></a>

```python
replication_task_arn: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `cdc_start_position_input`<sup>Optional</sup> <a name="cdc_start_position_input" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.cdcStartPositionInput"></a>

```python
cdc_start_position_input: str
```

- *Type:* str

---

##### `cdc_start_time_input`<sup>Optional</sup> <a name="cdc_start_time_input" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.cdcStartTimeInput"></a>

```python
cdc_start_time_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `migration_type_input`<sup>Optional</sup> <a name="migration_type_input" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.migrationTypeInput"></a>

```python
migration_type_input: str
```

- *Type:* str

---

##### `replication_instance_arn_input`<sup>Optional</sup> <a name="replication_instance_arn_input" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.replicationInstanceArnInput"></a>

```python
replication_instance_arn_input: str
```

- *Type:* str

---

##### `replication_task_id_input`<sup>Optional</sup> <a name="replication_task_id_input" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.replicationTaskIdInput"></a>

```python
replication_task_id_input: str
```

- *Type:* str

---

##### `replication_task_settings_input`<sup>Optional</sup> <a name="replication_task_settings_input" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.replicationTaskSettingsInput"></a>

```python
replication_task_settings_input: str
```

- *Type:* str

---

##### `source_endpoint_arn_input`<sup>Optional</sup> <a name="source_endpoint_arn_input" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.sourceEndpointArnInput"></a>

```python
source_endpoint_arn_input: str
```

- *Type:* str

---

##### `start_replication_task_input`<sup>Optional</sup> <a name="start_replication_task_input" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.startReplicationTaskInput"></a>

```python
start_replication_task_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `table_mappings_input`<sup>Optional</sup> <a name="table_mappings_input" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.tableMappingsInput"></a>

```python
table_mappings_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `target_endpoint_arn_input`<sup>Optional</sup> <a name="target_endpoint_arn_input" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.targetEndpointArnInput"></a>

```python
target_endpoint_arn_input: str
```

- *Type:* str

---

##### `cdc_start_position`<sup>Required</sup> <a name="cdc_start_position" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.cdcStartPosition"></a>

```python
cdc_start_position: str
```

- *Type:* str

---

##### `cdc_start_time`<sup>Required</sup> <a name="cdc_start_time" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.cdcStartTime"></a>

```python
cdc_start_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `migration_type`<sup>Required</sup> <a name="migration_type" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.migrationType"></a>

```python
migration_type: str
```

- *Type:* str

---

##### `replication_instance_arn`<sup>Required</sup> <a name="replication_instance_arn" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.replicationInstanceArn"></a>

```python
replication_instance_arn: str
```

- *Type:* str

---

##### `replication_task_id`<sup>Required</sup> <a name="replication_task_id" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.replicationTaskId"></a>

```python
replication_task_id: str
```

- *Type:* str

---

##### `replication_task_settings`<sup>Required</sup> <a name="replication_task_settings" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.replicationTaskSettings"></a>

```python
replication_task_settings: str
```

- *Type:* str

---

##### `source_endpoint_arn`<sup>Required</sup> <a name="source_endpoint_arn" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.sourceEndpointArn"></a>

```python
source_endpoint_arn: str
```

- *Type:* str

---

##### `start_replication_task`<sup>Required</sup> <a name="start_replication_task" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.startReplicationTask"></a>

```python
start_replication_task: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `table_mappings`<sup>Required</sup> <a name="table_mappings" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.tableMappings"></a>

```python
table_mappings: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `target_endpoint_arn`<sup>Required</sup> <a name="target_endpoint_arn" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.targetEndpointArn"></a>

```python
target_endpoint_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DmsReplicationTaskConfig <a name="DmsReplicationTaskConfig" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dms_replication_task

dmsReplicationTask.DmsReplicationTaskConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  migration_type: str,
  replication_instance_arn: str,
  replication_task_id: str,
  source_endpoint_arn: str,
  table_mappings: str,
  target_endpoint_arn: str,
  cdc_start_position: str = None,
  cdc_start_time: str = None,
  id: str = None,
  replication_task_settings: str = None,
  start_replication_task: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.migrationType">migration_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#migration_type DmsReplicationTask#migration_type}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.replicationInstanceArn">replication_instance_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#replication_instance_arn DmsReplicationTask#replication_instance_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.replicationTaskId">replication_task_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#replication_task_id DmsReplicationTask#replication_task_id}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.sourceEndpointArn">source_endpoint_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#source_endpoint_arn DmsReplicationTask#source_endpoint_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.tableMappings">table_mappings</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#table_mappings DmsReplicationTask#table_mappings}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.targetEndpointArn">target_endpoint_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#target_endpoint_arn DmsReplicationTask#target_endpoint_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.cdcStartPosition">cdc_start_position</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#cdc_start_position DmsReplicationTask#cdc_start_position}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.cdcStartTime">cdc_start_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#cdc_start_time DmsReplicationTask#cdc_start_time}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#id DmsReplicationTask#id}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.replicationTaskSettings">replication_task_settings</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#replication_task_settings DmsReplicationTask#replication_task_settings}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.startReplicationTask">start_replication_task</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#start_replication_task DmsReplicationTask#start_replication_task}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#tags DmsReplicationTask#tags}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#tags_all DmsReplicationTask#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `migration_type`<sup>Required</sup> <a name="migration_type" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.migrationType"></a>

```python
migration_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#migration_type DmsReplicationTask#migration_type}.

---

##### `replication_instance_arn`<sup>Required</sup> <a name="replication_instance_arn" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.replicationInstanceArn"></a>

```python
replication_instance_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#replication_instance_arn DmsReplicationTask#replication_instance_arn}.

---

##### `replication_task_id`<sup>Required</sup> <a name="replication_task_id" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.replicationTaskId"></a>

```python
replication_task_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#replication_task_id DmsReplicationTask#replication_task_id}.

---

##### `source_endpoint_arn`<sup>Required</sup> <a name="source_endpoint_arn" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.sourceEndpointArn"></a>

```python
source_endpoint_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#source_endpoint_arn DmsReplicationTask#source_endpoint_arn}.

---

##### `table_mappings`<sup>Required</sup> <a name="table_mappings" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.tableMappings"></a>

```python
table_mappings: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#table_mappings DmsReplicationTask#table_mappings}.

---

##### `target_endpoint_arn`<sup>Required</sup> <a name="target_endpoint_arn" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.targetEndpointArn"></a>

```python
target_endpoint_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#target_endpoint_arn DmsReplicationTask#target_endpoint_arn}.

---

##### `cdc_start_position`<sup>Optional</sup> <a name="cdc_start_position" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.cdcStartPosition"></a>

```python
cdc_start_position: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#cdc_start_position DmsReplicationTask#cdc_start_position}.

---

##### `cdc_start_time`<sup>Optional</sup> <a name="cdc_start_time" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.cdcStartTime"></a>

```python
cdc_start_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#cdc_start_time DmsReplicationTask#cdc_start_time}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#id DmsReplicationTask#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `replication_task_settings`<sup>Optional</sup> <a name="replication_task_settings" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.replicationTaskSettings"></a>

```python
replication_task_settings: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#replication_task_settings DmsReplicationTask#replication_task_settings}.

---

##### `start_replication_task`<sup>Optional</sup> <a name="start_replication_task" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.startReplicationTask"></a>

```python
start_replication_task: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#start_replication_task DmsReplicationTask#start_replication_task}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#tags DmsReplicationTask#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#tags_all DmsReplicationTask#tags_all}.

---



