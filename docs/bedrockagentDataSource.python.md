# `bedrockagentDataSource` Submodule <a name="`bedrockagentDataSource` Submodule" id="@cdktf/provider-aws.bedrockagentDataSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentDataSource <a name="BedrockagentDataSource" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/bedrockagent_data_source aws_bedrockagent_data_source}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_data_source

bedrockagentDataSource.BedrockagentDataSource(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  knowledge_base_id: str,
  name: str,
  data_deletion_policy: str = None,
  data_source_configuration: typing.Union[IResolvable, typing.List[BedrockagentDataSourceDataSourceConfiguration]] = None,
  description: str = None,
  server_side_encryption_configuration: typing.Union[IResolvable, typing.List[BedrockagentDataSourceServerSideEncryptionConfiguration]] = None,
  timeouts: BedrockagentDataSourceTimeouts = None,
  vector_ingestion_configuration: typing.Union[IResolvable, typing.List[BedrockagentDataSourceVectorIngestionConfiguration]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.Initializer.parameter.knowledgeBaseId">knowledge_base_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/bedrockagent_data_source#knowledge_base_id BedrockagentDataSource#knowledge_base_id}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/bedrockagent_data_source#name BedrockagentDataSource#name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.Initializer.parameter.dataDeletionPolicy">data_deletion_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/bedrockagent_data_source#data_deletion_policy BedrockagentDataSource#data_deletion_policy}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.Initializer.parameter.dataSourceConfiguration">data_source_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfiguration">BedrockagentDataSourceDataSourceConfiguration</a>]]</code> | data_source_configuration block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/bedrockagent_data_source#description BedrockagentDataSource#description}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.Initializer.parameter.serverSideEncryptionConfiguration">server_side_encryption_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfiguration">BedrockagentDataSourceServerSideEncryptionConfiguration</a>]]</code> | server_side_encryption_configuration block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeouts">BedrockagentDataSourceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.Initializer.parameter.vectorIngestionConfiguration">vector_ingestion_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfiguration">BedrockagentDataSourceVectorIngestionConfiguration</a>]]</code> | vector_ingestion_configuration block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `knowledge_base_id`<sup>Required</sup> <a name="knowledge_base_id" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.Initializer.parameter.knowledgeBaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/bedrockagent_data_source#knowledge_base_id BedrockagentDataSource#knowledge_base_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/bedrockagent_data_source#name BedrockagentDataSource#name}.

---

##### `data_deletion_policy`<sup>Optional</sup> <a name="data_deletion_policy" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.Initializer.parameter.dataDeletionPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/bedrockagent_data_source#data_deletion_policy BedrockagentDataSource#data_deletion_policy}.

---

##### `data_source_configuration`<sup>Optional</sup> <a name="data_source_configuration" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.Initializer.parameter.dataSourceConfiguration"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfiguration">BedrockagentDataSourceDataSourceConfiguration</a>]]

data_source_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/bedrockagent_data_source#data_source_configuration BedrockagentDataSource#data_source_configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/bedrockagent_data_source#description BedrockagentDataSource#description}.

---

##### `server_side_encryption_configuration`<sup>Optional</sup> <a name="server_side_encryption_configuration" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.Initializer.parameter.serverSideEncryptionConfiguration"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfiguration">BedrockagentDataSourceServerSideEncryptionConfiguration</a>]]

server_side_encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/bedrockagent_data_source#server_side_encryption_configuration BedrockagentDataSource#server_side_encryption_configuration}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeouts">BedrockagentDataSourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/bedrockagent_data_source#timeouts BedrockagentDataSource#timeouts}

---

##### `vector_ingestion_configuration`<sup>Optional</sup> <a name="vector_ingestion_configuration" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.Initializer.parameter.vectorIngestionConfiguration"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfiguration">BedrockagentDataSourceVectorIngestionConfiguration</a>]]

vector_ingestion_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/bedrockagent_data_source#vector_ingestion_configuration BedrockagentDataSource#vector_ingestion_configuration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.putDataSourceConfiguration">put_data_source_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.putServerSideEncryptionConfiguration">put_server_side_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.putVectorIngestionConfiguration">put_vector_ingestion_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.resetDataDeletionPolicy">reset_data_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.resetDataSourceConfiguration">reset_data_source_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.resetServerSideEncryptionConfiguration">reset_server_side_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.resetVectorIngestionConfiguration">reset_vector_ingestion_configuration</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_data_source_configuration` <a name="put_data_source_configuration" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.putDataSourceConfiguration"></a>

```python
def put_data_source_configuration(
  value: typing.Union[IResolvable, typing.List[BedrockagentDataSourceDataSourceConfiguration]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.putDataSourceConfiguration.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfiguration">BedrockagentDataSourceDataSourceConfiguration</a>]]

---

##### `put_server_side_encryption_configuration` <a name="put_server_side_encryption_configuration" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.putServerSideEncryptionConfiguration"></a>

```python
def put_server_side_encryption_configuration(
  value: typing.Union[IResolvable, typing.List[BedrockagentDataSourceServerSideEncryptionConfiguration]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.putServerSideEncryptionConfiguration.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfiguration">BedrockagentDataSourceServerSideEncryptionConfiguration</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/bedrockagent_data_source#create BedrockagentDataSource#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/bedrockagent_data_source#delete BedrockagentDataSource#delete}

---

##### `put_vector_ingestion_configuration` <a name="put_vector_ingestion_configuration" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.putVectorIngestionConfiguration"></a>

```python
def put_vector_ingestion_configuration(
  value: typing.Union[IResolvable, typing.List[BedrockagentDataSourceVectorIngestionConfiguration]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.putVectorIngestionConfiguration.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfiguration">BedrockagentDataSourceVectorIngestionConfiguration</a>]]

---

##### `reset_data_deletion_policy` <a name="reset_data_deletion_policy" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.resetDataDeletionPolicy"></a>

```python
def reset_data_deletion_policy() -> None
```

##### `reset_data_source_configuration` <a name="reset_data_source_configuration" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.resetDataSourceConfiguration"></a>

```python
def reset_data_source_configuration() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_server_side_encryption_configuration` <a name="reset_server_side_encryption_configuration" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.resetServerSideEncryptionConfiguration"></a>

```python
def reset_server_side_encryption_configuration() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_vector_ingestion_configuration` <a name="reset_vector_ingestion_configuration" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.resetVectorIngestionConfiguration"></a>

```python
def reset_vector_ingestion_configuration() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BedrockagentDataSource resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_data_source

bedrockagentDataSource.BedrockagentDataSource.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_data_source

bedrockagentDataSource.BedrockagentDataSource.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_data_source

bedrockagentDataSource.BedrockagentDataSource.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_data_source

bedrockagentDataSource.BedrockagentDataSource.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BedrockagentDataSource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BedrockagentDataSource to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BedrockagentDataSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/bedrockagent_data_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BedrockagentDataSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.dataSourceConfiguration">data_source_configuration</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationList">BedrockagentDataSourceDataSourceConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.dataSourceId">data_source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.serverSideEncryptionConfiguration">server_side_encryption_configuration</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationList">BedrockagentDataSourceServerSideEncryptionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference">BedrockagentDataSourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.vectorIngestionConfiguration">vector_ingestion_configuration</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationList">BedrockagentDataSourceVectorIngestionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.dataDeletionPolicyInput">data_deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.dataSourceConfigurationInput">data_source_configuration_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfiguration">BedrockagentDataSourceDataSourceConfiguration</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.knowledgeBaseIdInput">knowledge_base_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.serverSideEncryptionConfigurationInput">server_side_encryption_configuration_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfiguration">BedrockagentDataSourceServerSideEncryptionConfiguration</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeouts">BedrockagentDataSourceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.vectorIngestionConfigurationInput">vector_ingestion_configuration_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfiguration">BedrockagentDataSourceVectorIngestionConfiguration</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.dataDeletionPolicy">data_deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.knowledgeBaseId">knowledge_base_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_source_configuration`<sup>Required</sup> <a name="data_source_configuration" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.dataSourceConfiguration"></a>

```python
data_source_configuration: BedrockagentDataSourceDataSourceConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationList">BedrockagentDataSourceDataSourceConfigurationList</a>

---

##### `data_source_id`<sup>Required</sup> <a name="data_source_id" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.dataSourceId"></a>

```python
data_source_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `server_side_encryption_configuration`<sup>Required</sup> <a name="server_side_encryption_configuration" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.serverSideEncryptionConfiguration"></a>

```python
server_side_encryption_configuration: BedrockagentDataSourceServerSideEncryptionConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationList">BedrockagentDataSourceServerSideEncryptionConfigurationList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.timeouts"></a>

```python
timeouts: BedrockagentDataSourceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference">BedrockagentDataSourceTimeoutsOutputReference</a>

---

##### `vector_ingestion_configuration`<sup>Required</sup> <a name="vector_ingestion_configuration" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.vectorIngestionConfiguration"></a>

```python
vector_ingestion_configuration: BedrockagentDataSourceVectorIngestionConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationList">BedrockagentDataSourceVectorIngestionConfigurationList</a>

---

##### `data_deletion_policy_input`<sup>Optional</sup> <a name="data_deletion_policy_input" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.dataDeletionPolicyInput"></a>

```python
data_deletion_policy_input: str
```

- *Type:* str

---

##### `data_source_configuration_input`<sup>Optional</sup> <a name="data_source_configuration_input" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.dataSourceConfigurationInput"></a>

```python
data_source_configuration_input: typing.Union[IResolvable, typing.List[BedrockagentDataSourceDataSourceConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfiguration">BedrockagentDataSourceDataSourceConfiguration</a>]]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `knowledge_base_id_input`<sup>Optional</sup> <a name="knowledge_base_id_input" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.knowledgeBaseIdInput"></a>

```python
knowledge_base_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `server_side_encryption_configuration_input`<sup>Optional</sup> <a name="server_side_encryption_configuration_input" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.serverSideEncryptionConfigurationInput"></a>

```python
server_side_encryption_configuration_input: typing.Union[IResolvable, typing.List[BedrockagentDataSourceServerSideEncryptionConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfiguration">BedrockagentDataSourceServerSideEncryptionConfiguration</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, BedrockagentDataSourceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeouts">BedrockagentDataSourceTimeouts</a>]

---

##### `vector_ingestion_configuration_input`<sup>Optional</sup> <a name="vector_ingestion_configuration_input" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.vectorIngestionConfigurationInput"></a>

```python
vector_ingestion_configuration_input: typing.Union[IResolvable, typing.List[BedrockagentDataSourceVectorIngestionConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfiguration">BedrockagentDataSourceVectorIngestionConfiguration</a>]]

---

##### `data_deletion_policy`<sup>Required</sup> <a name="data_deletion_policy" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.dataDeletionPolicy"></a>

```python
data_deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `knowledge_base_id`<sup>Required</sup> <a name="knowledge_base_id" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.knowledgeBaseId"></a>

```python
knowledge_base_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSource.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentDataSourceConfig <a name="BedrockagentDataSourceConfig" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_data_source

bedrockagentDataSource.BedrockagentDataSourceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  knowledge_base_id: str,
  name: str,
  data_deletion_policy: str = None,
  data_source_configuration: typing.Union[IResolvable, typing.List[BedrockagentDataSourceDataSourceConfiguration]] = None,
  description: str = None,
  server_side_encryption_configuration: typing.Union[IResolvable, typing.List[BedrockagentDataSourceServerSideEncryptionConfiguration]] = None,
  timeouts: BedrockagentDataSourceTimeouts = None,
  vector_ingestion_configuration: typing.Union[IResolvable, typing.List[BedrockagentDataSourceVectorIngestionConfiguration]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceConfig.property.knowledgeBaseId">knowledge_base_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/bedrockagent_data_source#knowledge_base_id BedrockagentDataSource#knowledge_base_id}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/bedrockagent_data_source#name BedrockagentDataSource#name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceConfig.property.dataDeletionPolicy">data_deletion_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/bedrockagent_data_source#data_deletion_policy BedrockagentDataSource#data_deletion_policy}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceConfig.property.dataSourceConfiguration">data_source_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfiguration">BedrockagentDataSourceDataSourceConfiguration</a>]]</code> | data_source_configuration block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/bedrockagent_data_source#description BedrockagentDataSource#description}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceConfig.property.serverSideEncryptionConfiguration">server_side_encryption_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfiguration">BedrockagentDataSourceServerSideEncryptionConfiguration</a>]]</code> | server_side_encryption_configuration block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeouts">BedrockagentDataSourceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceConfig.property.vectorIngestionConfiguration">vector_ingestion_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfiguration">BedrockagentDataSourceVectorIngestionConfiguration</a>]]</code> | vector_ingestion_configuration block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `knowledge_base_id`<sup>Required</sup> <a name="knowledge_base_id" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceConfig.property.knowledgeBaseId"></a>

```python
knowledge_base_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/bedrockagent_data_source#knowledge_base_id BedrockagentDataSource#knowledge_base_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/bedrockagent_data_source#name BedrockagentDataSource#name}.

---

##### `data_deletion_policy`<sup>Optional</sup> <a name="data_deletion_policy" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceConfig.property.dataDeletionPolicy"></a>

```python
data_deletion_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/bedrockagent_data_source#data_deletion_policy BedrockagentDataSource#data_deletion_policy}.

---

##### `data_source_configuration`<sup>Optional</sup> <a name="data_source_configuration" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceConfig.property.dataSourceConfiguration"></a>

```python
data_source_configuration: typing.Union[IResolvable, typing.List[BedrockagentDataSourceDataSourceConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfiguration">BedrockagentDataSourceDataSourceConfiguration</a>]]

data_source_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/bedrockagent_data_source#data_source_configuration BedrockagentDataSource#data_source_configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/bedrockagent_data_source#description BedrockagentDataSource#description}.

---

##### `server_side_encryption_configuration`<sup>Optional</sup> <a name="server_side_encryption_configuration" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceConfig.property.serverSideEncryptionConfiguration"></a>

```python
server_side_encryption_configuration: typing.Union[IResolvable, typing.List[BedrockagentDataSourceServerSideEncryptionConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfiguration">BedrockagentDataSourceServerSideEncryptionConfiguration</a>]]

server_side_encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/bedrockagent_data_source#server_side_encryption_configuration BedrockagentDataSource#server_side_encryption_configuration}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceConfig.property.timeouts"></a>

```python
timeouts: BedrockagentDataSourceTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeouts">BedrockagentDataSourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/bedrockagent_data_source#timeouts BedrockagentDataSource#timeouts}

---

##### `vector_ingestion_configuration`<sup>Optional</sup> <a name="vector_ingestion_configuration" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceConfig.property.vectorIngestionConfiguration"></a>

```python
vector_ingestion_configuration: typing.Union[IResolvable, typing.List[BedrockagentDataSourceVectorIngestionConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfiguration">BedrockagentDataSourceVectorIngestionConfiguration</a>]]

vector_ingestion_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/bedrockagent_data_source#vector_ingestion_configuration BedrockagentDataSource#vector_ingestion_configuration}

---

### BedrockagentDataSourceDataSourceConfiguration <a name="BedrockagentDataSourceDataSourceConfiguration" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_data_source

bedrockagentDataSource.BedrockagentDataSourceDataSourceConfiguration(
  type: str,
  s3_configuration: typing.Union[IResolvable, typing.List[BedrockagentDataSourceDataSourceConfigurationS3Configuration]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfiguration.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/bedrockagent_data_source#type BedrockagentDataSource#type}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfiguration.property.s3Configuration">s3_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3Configuration">BedrockagentDataSourceDataSourceConfigurationS3Configuration</a>]]</code> | s3_configuration block. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfiguration.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/bedrockagent_data_source#type BedrockagentDataSource#type}.

---

##### `s3_configuration`<sup>Optional</sup> <a name="s3_configuration" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfiguration.property.s3Configuration"></a>

```python
s3_configuration: typing.Union[IResolvable, typing.List[BedrockagentDataSourceDataSourceConfigurationS3Configuration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3Configuration">BedrockagentDataSourceDataSourceConfigurationS3Configuration</a>]]

s3_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/bedrockagent_data_source#s3_configuration BedrockagentDataSource#s3_configuration}

---

### BedrockagentDataSourceDataSourceConfigurationS3Configuration <a name="BedrockagentDataSourceDataSourceConfigurationS3Configuration" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3Configuration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_data_source

bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3Configuration(
  bucket_arn: str,
  bucket_owner_account_id: str = None,
  inclusion_prefixes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3Configuration.property.bucketArn">bucket_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/bedrockagent_data_source#bucket_arn BedrockagentDataSource#bucket_arn}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3Configuration.property.bucketOwnerAccountId">bucket_owner_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/bedrockagent_data_source#bucket_owner_account_id BedrockagentDataSource#bucket_owner_account_id}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3Configuration.property.inclusionPrefixes">inclusion_prefixes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/bedrockagent_data_source#inclusion_prefixes BedrockagentDataSource#inclusion_prefixes}. |

---

##### `bucket_arn`<sup>Required</sup> <a name="bucket_arn" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3Configuration.property.bucketArn"></a>

```python
bucket_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/bedrockagent_data_source#bucket_arn BedrockagentDataSource#bucket_arn}.

---

##### `bucket_owner_account_id`<sup>Optional</sup> <a name="bucket_owner_account_id" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3Configuration.property.bucketOwnerAccountId"></a>

```python
bucket_owner_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/bedrockagent_data_source#bucket_owner_account_id BedrockagentDataSource#bucket_owner_account_id}.

---

##### `inclusion_prefixes`<sup>Optional</sup> <a name="inclusion_prefixes" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3Configuration.property.inclusionPrefixes"></a>

```python
inclusion_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/bedrockagent_data_source#inclusion_prefixes BedrockagentDataSource#inclusion_prefixes}.

---

### BedrockagentDataSourceServerSideEncryptionConfiguration <a name="BedrockagentDataSourceServerSideEncryptionConfiguration" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_data_source

bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfiguration(
  kms_key_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfiguration.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/bedrockagent_data_source#kms_key_arn BedrockagentDataSource#kms_key_arn}. |

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfiguration.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/bedrockagent_data_source#kms_key_arn BedrockagentDataSource#kms_key_arn}.

---

### BedrockagentDataSourceTimeouts <a name="BedrockagentDataSourceTimeouts" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_data_source

bedrockagentDataSource.BedrockagentDataSourceTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/bedrockagent_data_source#create BedrockagentDataSource#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/bedrockagent_data_source#delete BedrockagentDataSource#delete}

---

### BedrockagentDataSourceVectorIngestionConfiguration <a name="BedrockagentDataSourceVectorIngestionConfiguration" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_data_source

bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfiguration(
  chunking_configuration: typing.Union[IResolvable, typing.List[BedrockagentDataSourceVectorIngestionConfigurationChunkingConfiguration]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfiguration.property.chunkingConfiguration">chunking_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfiguration">BedrockagentDataSourceVectorIngestionConfigurationChunkingConfiguration</a>]]</code> | chunking_configuration block. |

---

##### `chunking_configuration`<sup>Optional</sup> <a name="chunking_configuration" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfiguration.property.chunkingConfiguration"></a>

```python
chunking_configuration: typing.Union[IResolvable, typing.List[BedrockagentDataSourceVectorIngestionConfigurationChunkingConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfiguration">BedrockagentDataSourceVectorIngestionConfigurationChunkingConfiguration</a>]]

chunking_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/bedrockagent_data_source#chunking_configuration BedrockagentDataSource#chunking_configuration}

---

### BedrockagentDataSourceVectorIngestionConfigurationChunkingConfiguration <a name="BedrockagentDataSourceVectorIngestionConfigurationChunkingConfiguration" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_data_source

bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfiguration(
  chunking_strategy: str,
  fixed_size_chunking_configuration: typing.Union[IResolvable, typing.List[BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfiguration.property.chunkingStrategy">chunking_strategy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/bedrockagent_data_source#chunking_strategy BedrockagentDataSource#chunking_strategy}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfiguration.property.fixedSizeChunkingConfiguration">fixed_size_chunking_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration">BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration</a>]]</code> | fixed_size_chunking_configuration block. |

---

##### `chunking_strategy`<sup>Required</sup> <a name="chunking_strategy" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfiguration.property.chunkingStrategy"></a>

```python
chunking_strategy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/bedrockagent_data_source#chunking_strategy BedrockagentDataSource#chunking_strategy}.

---

##### `fixed_size_chunking_configuration`<sup>Optional</sup> <a name="fixed_size_chunking_configuration" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfiguration.property.fixedSizeChunkingConfiguration"></a>

```python
fixed_size_chunking_configuration: typing.Union[IResolvable, typing.List[BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration">BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration</a>]]

fixed_size_chunking_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/bedrockagent_data_source#fixed_size_chunking_configuration BedrockagentDataSource#fixed_size_chunking_configuration}

---

### BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration <a name="BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_data_source

bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration(
  max_tokens: typing.Union[int, float],
  overlap_percentage: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration.property.maxTokens">max_tokens</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/bedrockagent_data_source#max_tokens BedrockagentDataSource#max_tokens}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration.property.overlapPercentage">overlap_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/bedrockagent_data_source#overlap_percentage BedrockagentDataSource#overlap_percentage}. |

---

##### `max_tokens`<sup>Required</sup> <a name="max_tokens" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration.property.maxTokens"></a>

```python
max_tokens: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/bedrockagent_data_source#max_tokens BedrockagentDataSource#max_tokens}.

---

##### `overlap_percentage`<sup>Required</sup> <a name="overlap_percentage" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration.property.overlapPercentage"></a>

```python
overlap_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/bedrockagent_data_source#overlap_percentage BedrockagentDataSource#overlap_percentage}.

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentDataSourceDataSourceConfigurationList <a name="BedrockagentDataSourceDataSourceConfigurationList" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_data_source

bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentDataSourceDataSourceConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfiguration">BedrockagentDataSourceDataSourceConfiguration</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BedrockagentDataSourceDataSourceConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfiguration">BedrockagentDataSourceDataSourceConfiguration</a>]]

---


### BedrockagentDataSourceDataSourceConfigurationOutputReference <a name="BedrockagentDataSourceDataSourceConfigurationOutputReference" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_data_source

bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.putS3Configuration">put_s3_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.resetS3Configuration">reset_s3_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_s3_configuration` <a name="put_s3_configuration" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.putS3Configuration"></a>

```python
def put_s3_configuration(
  value: typing.Union[IResolvable, typing.List[BedrockagentDataSourceDataSourceConfigurationS3Configuration]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.putS3Configuration.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3Configuration">BedrockagentDataSourceDataSourceConfigurationS3Configuration</a>]]

---

##### `reset_s3_configuration` <a name="reset_s3_configuration" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.resetS3Configuration"></a>

```python
def reset_s3_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.property.s3Configuration">s3_configuration</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationList">BedrockagentDataSourceDataSourceConfigurationS3ConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.property.s3ConfigurationInput">s3_configuration_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3Configuration">BedrockagentDataSourceDataSourceConfigurationS3Configuration</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfiguration">BedrockagentDataSourceDataSourceConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_configuration`<sup>Required</sup> <a name="s3_configuration" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.property.s3Configuration"></a>

```python
s3_configuration: BedrockagentDataSourceDataSourceConfigurationS3ConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationList">BedrockagentDataSourceDataSourceConfigurationS3ConfigurationList</a>

---

##### `s3_configuration_input`<sup>Optional</sup> <a name="s3_configuration_input" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.property.s3ConfigurationInput"></a>

```python
s3_configuration_input: typing.Union[IResolvable, typing.List[BedrockagentDataSourceDataSourceConfigurationS3Configuration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3Configuration">BedrockagentDataSourceDataSourceConfigurationS3Configuration</a>]]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BedrockagentDataSourceDataSourceConfiguration]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfiguration">BedrockagentDataSourceDataSourceConfiguration</a>]

---


### BedrockagentDataSourceDataSourceConfigurationS3ConfigurationList <a name="BedrockagentDataSourceDataSourceConfigurationS3ConfigurationList" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_data_source

bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3Configuration">BedrockagentDataSourceDataSourceConfigurationS3Configuration</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BedrockagentDataSourceDataSourceConfigurationS3Configuration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3Configuration">BedrockagentDataSourceDataSourceConfigurationS3Configuration</a>]]

---


### BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference <a name="BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_data_source

bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.resetBucketOwnerAccountId">reset_bucket_owner_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.resetInclusionPrefixes">reset_inclusion_prefixes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket_owner_account_id` <a name="reset_bucket_owner_account_id" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.resetBucketOwnerAccountId"></a>

```python
def reset_bucket_owner_account_id() -> None
```

##### `reset_inclusion_prefixes` <a name="reset_inclusion_prefixes" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.resetInclusionPrefixes"></a>

```python
def reset_inclusion_prefixes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.property.bucketArnInput">bucket_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.property.bucketOwnerAccountIdInput">bucket_owner_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.property.inclusionPrefixesInput">inclusion_prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.property.bucketArn">bucket_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.property.bucketOwnerAccountId">bucket_owner_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.property.inclusionPrefixes">inclusion_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3Configuration">BedrockagentDataSourceDataSourceConfigurationS3Configuration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_arn_input`<sup>Optional</sup> <a name="bucket_arn_input" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.property.bucketArnInput"></a>

```python
bucket_arn_input: str
```

- *Type:* str

---

##### `bucket_owner_account_id_input`<sup>Optional</sup> <a name="bucket_owner_account_id_input" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.property.bucketOwnerAccountIdInput"></a>

```python
bucket_owner_account_id_input: str
```

- *Type:* str

---

##### `inclusion_prefixes_input`<sup>Optional</sup> <a name="inclusion_prefixes_input" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.property.inclusionPrefixesInput"></a>

```python
inclusion_prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bucket_arn`<sup>Required</sup> <a name="bucket_arn" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.property.bucketArn"></a>

```python
bucket_arn: str
```

- *Type:* str

---

##### `bucket_owner_account_id`<sup>Required</sup> <a name="bucket_owner_account_id" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.property.bucketOwnerAccountId"></a>

```python
bucket_owner_account_id: str
```

- *Type:* str

---

##### `inclusion_prefixes`<sup>Required</sup> <a name="inclusion_prefixes" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.property.inclusionPrefixes"></a>

```python
inclusion_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BedrockagentDataSourceDataSourceConfigurationS3Configuration]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceDataSourceConfigurationS3Configuration">BedrockagentDataSourceDataSourceConfigurationS3Configuration</a>]

---


### BedrockagentDataSourceServerSideEncryptionConfigurationList <a name="BedrockagentDataSourceServerSideEncryptionConfigurationList" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_data_source

bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfiguration">BedrockagentDataSourceServerSideEncryptionConfiguration</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BedrockagentDataSourceServerSideEncryptionConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfiguration">BedrockagentDataSourceServerSideEncryptionConfiguration</a>]]

---


### BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference <a name="BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_data_source

bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfiguration">BedrockagentDataSourceServerSideEncryptionConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BedrockagentDataSourceServerSideEncryptionConfiguration]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceServerSideEncryptionConfiguration">BedrockagentDataSourceServerSideEncryptionConfiguration</a>]

---


### BedrockagentDataSourceTimeoutsOutputReference <a name="BedrockagentDataSourceTimeoutsOutputReference" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_data_source

bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeouts">BedrockagentDataSourceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BedrockagentDataSourceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceTimeouts">BedrockagentDataSourceTimeouts</a>]

---


### BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationList <a name="BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationList" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_data_source

bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration">BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration">BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration</a>]]

---


### BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference <a name="BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_data_source

bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.property.maxTokensInput">max_tokens_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.property.overlapPercentageInput">overlap_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.property.maxTokens">max_tokens</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.property.overlapPercentage">overlap_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration">BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_tokens_input`<sup>Optional</sup> <a name="max_tokens_input" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.property.maxTokensInput"></a>

```python
max_tokens_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `overlap_percentage_input`<sup>Optional</sup> <a name="overlap_percentage_input" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.property.overlapPercentageInput"></a>

```python
overlap_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_tokens`<sup>Required</sup> <a name="max_tokens" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.property.maxTokens"></a>

```python
max_tokens: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `overlap_percentage`<sup>Required</sup> <a name="overlap_percentage" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.property.overlapPercentage"></a>

```python
overlap_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration">BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration</a>]

---


### BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationList <a name="BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationList" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_data_source

bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfiguration">BedrockagentDataSourceVectorIngestionConfigurationChunkingConfiguration</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BedrockagentDataSourceVectorIngestionConfigurationChunkingConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfiguration">BedrockagentDataSourceVectorIngestionConfigurationChunkingConfiguration</a>]]

---


### BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference <a name="BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_data_source

bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.putFixedSizeChunkingConfiguration">put_fixed_size_chunking_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.resetFixedSizeChunkingConfiguration">reset_fixed_size_chunking_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_fixed_size_chunking_configuration` <a name="put_fixed_size_chunking_configuration" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.putFixedSizeChunkingConfiguration"></a>

```python
def put_fixed_size_chunking_configuration(
  value: typing.Union[IResolvable, typing.List[BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.putFixedSizeChunkingConfiguration.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration">BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration</a>]]

---

##### `reset_fixed_size_chunking_configuration` <a name="reset_fixed_size_chunking_configuration" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.resetFixedSizeChunkingConfiguration"></a>

```python
def reset_fixed_size_chunking_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.property.fixedSizeChunkingConfiguration">fixed_size_chunking_configuration</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationList">BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.property.chunkingStrategyInput">chunking_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.property.fixedSizeChunkingConfigurationInput">fixed_size_chunking_configuration_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration">BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.property.chunkingStrategy">chunking_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfiguration">BedrockagentDataSourceVectorIngestionConfigurationChunkingConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fixed_size_chunking_configuration`<sup>Required</sup> <a name="fixed_size_chunking_configuration" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.property.fixedSizeChunkingConfiguration"></a>

```python
fixed_size_chunking_configuration: BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationList">BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationList</a>

---

##### `chunking_strategy_input`<sup>Optional</sup> <a name="chunking_strategy_input" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.property.chunkingStrategyInput"></a>

```python
chunking_strategy_input: str
```

- *Type:* str

---

##### `fixed_size_chunking_configuration_input`<sup>Optional</sup> <a name="fixed_size_chunking_configuration_input" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.property.fixedSizeChunkingConfigurationInput"></a>

```python
fixed_size_chunking_configuration_input: typing.Union[IResolvable, typing.List[BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration">BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration</a>]]

---

##### `chunking_strategy`<sup>Required</sup> <a name="chunking_strategy" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.property.chunkingStrategy"></a>

```python
chunking_strategy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BedrockagentDataSourceVectorIngestionConfigurationChunkingConfiguration]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfiguration">BedrockagentDataSourceVectorIngestionConfigurationChunkingConfiguration</a>]

---


### BedrockagentDataSourceVectorIngestionConfigurationList <a name="BedrockagentDataSourceVectorIngestionConfigurationList" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_data_source

bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentDataSourceVectorIngestionConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfiguration">BedrockagentDataSourceVectorIngestionConfiguration</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BedrockagentDataSourceVectorIngestionConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfiguration">BedrockagentDataSourceVectorIngestionConfiguration</a>]]

---


### BedrockagentDataSourceVectorIngestionConfigurationOutputReference <a name="BedrockagentDataSourceVectorIngestionConfigurationOutputReference" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_data_source

bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference.putChunkingConfiguration">put_chunking_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference.resetChunkingConfiguration">reset_chunking_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_chunking_configuration` <a name="put_chunking_configuration" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference.putChunkingConfiguration"></a>

```python
def put_chunking_configuration(
  value: typing.Union[IResolvable, typing.List[BedrockagentDataSourceVectorIngestionConfigurationChunkingConfiguration]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference.putChunkingConfiguration.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfiguration">BedrockagentDataSourceVectorIngestionConfigurationChunkingConfiguration</a>]]

---

##### `reset_chunking_configuration` <a name="reset_chunking_configuration" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference.resetChunkingConfiguration"></a>

```python
def reset_chunking_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference.property.chunkingConfiguration">chunking_configuration</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationList">BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference.property.chunkingConfigurationInput">chunking_configuration_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfiguration">BedrockagentDataSourceVectorIngestionConfigurationChunkingConfiguration</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfiguration">BedrockagentDataSourceVectorIngestionConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `chunking_configuration`<sup>Required</sup> <a name="chunking_configuration" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference.property.chunkingConfiguration"></a>

```python
chunking_configuration: BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationList">BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationList</a>

---

##### `chunking_configuration_input`<sup>Optional</sup> <a name="chunking_configuration_input" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference.property.chunkingConfigurationInput"></a>

```python
chunking_configuration_input: typing.Union[IResolvable, typing.List[BedrockagentDataSourceVectorIngestionConfigurationChunkingConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationChunkingConfiguration">BedrockagentDataSourceVectorIngestionConfigurationChunkingConfiguration</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BedrockagentDataSourceVectorIngestionConfiguration]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockagentDataSource.BedrockagentDataSourceVectorIngestionConfiguration">BedrockagentDataSourceVectorIngestionConfiguration</a>]

---



