# `dbInstanceAutomatedBackupsReplication` Submodule <a name="`dbInstanceAutomatedBackupsReplication` Submodule" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DbInstanceAutomatedBackupsReplication <a name="DbInstanceAutomatedBackupsReplication" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication aws_db_instance_automated_backups_replication}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import db_instance_automated_backups_replication

dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  source_db_instance_arn: str,
  id: str = None,
  kms_key_id: str = None,
  pre_signed_url: str = None,
  retention_period: typing.Union[int, float] = None,
  timeouts: DbInstanceAutomatedBackupsReplicationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.sourceDbInstanceArn">source_db_instance_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#source_db_instance_arn DbInstanceAutomatedBackupsReplication#source_db_instance_arn}. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#id DbInstanceAutomatedBackupsReplication#id}. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#kms_key_id DbInstanceAutomatedBackupsReplication#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.preSignedUrl">pre_signed_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#pre_signed_url DbInstanceAutomatedBackupsReplication#pre_signed_url}. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.retentionPeriod">retention_period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#retention_period DbInstanceAutomatedBackupsReplication#retention_period}. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeouts">DbInstanceAutomatedBackupsReplicationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `source_db_instance_arn`<sup>Required</sup> <a name="source_db_instance_arn" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.sourceDbInstanceArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#source_db_instance_arn DbInstanceAutomatedBackupsReplication#source_db_instance_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#id DbInstanceAutomatedBackupsReplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#kms_key_id DbInstanceAutomatedBackupsReplication#kms_key_id}.

---

##### `pre_signed_url`<sup>Optional</sup> <a name="pre_signed_url" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.preSignedUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#pre_signed_url DbInstanceAutomatedBackupsReplication#pre_signed_url}.

---

##### `retention_period`<sup>Optional</sup> <a name="retention_period" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.retentionPeriod"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#retention_period DbInstanceAutomatedBackupsReplication#retention_period}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeouts">DbInstanceAutomatedBackupsReplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#timeouts DbInstanceAutomatedBackupsReplication#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.resetPreSignedUrl">reset_pre_signed_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.resetRetentionPeriod">reset_retention_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#create DbInstanceAutomatedBackupsReplication#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#delete DbInstanceAutomatedBackupsReplication#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_pre_signed_url` <a name="reset_pre_signed_url" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.resetPreSignedUrl"></a>

```python
def reset_pre_signed_url() -> None
```

##### `reset_retention_period` <a name="reset_retention_period" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.resetRetentionPeriod"></a>

```python
def reset_retention_period() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import db_instance_automated_backups_replication

dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import db_instance_automated_backups_replication

dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import db_instance_automated_backups_replication

dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference">DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.preSignedUrlInput">pre_signed_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.retentionPeriodInput">retention_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.sourceDbInstanceArnInput">source_db_instance_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeouts">DbInstanceAutomatedBackupsReplicationTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.preSignedUrl">pre_signed_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.retentionPeriod">retention_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.sourceDbInstanceArn">source_db_instance_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.timeouts"></a>

```python
timeouts: DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference">DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `pre_signed_url_input`<sup>Optional</sup> <a name="pre_signed_url_input" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.preSignedUrlInput"></a>

```python
pre_signed_url_input: str
```

- *Type:* str

---

##### `retention_period_input`<sup>Optional</sup> <a name="retention_period_input" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.retentionPeriodInput"></a>

```python
retention_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_db_instance_arn_input`<sup>Optional</sup> <a name="source_db_instance_arn_input" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.sourceDbInstanceArnInput"></a>

```python
source_db_instance_arn_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DbInstanceAutomatedBackupsReplicationTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeouts">DbInstanceAutomatedBackupsReplicationTimeouts</a>, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `pre_signed_url`<sup>Required</sup> <a name="pre_signed_url" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.preSignedUrl"></a>

```python
pre_signed_url: str
```

- *Type:* str

---

##### `retention_period`<sup>Required</sup> <a name="retention_period" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.retentionPeriod"></a>

```python
retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_db_instance_arn`<sup>Required</sup> <a name="source_db_instance_arn" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.sourceDbInstanceArn"></a>

```python
source_db_instance_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DbInstanceAutomatedBackupsReplicationConfig <a name="DbInstanceAutomatedBackupsReplicationConfig" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import db_instance_automated_backups_replication

dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  source_db_instance_arn: str,
  id: str = None,
  kms_key_id: str = None,
  pre_signed_url: str = None,
  retention_period: typing.Union[int, float] = None,
  timeouts: DbInstanceAutomatedBackupsReplicationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.sourceDbInstanceArn">source_db_instance_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#source_db_instance_arn DbInstanceAutomatedBackupsReplication#source_db_instance_arn}. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#id DbInstanceAutomatedBackupsReplication#id}. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#kms_key_id DbInstanceAutomatedBackupsReplication#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.preSignedUrl">pre_signed_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#pre_signed_url DbInstanceAutomatedBackupsReplication#pre_signed_url}. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.retentionPeriod">retention_period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#retention_period DbInstanceAutomatedBackupsReplication#retention_period}. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeouts">DbInstanceAutomatedBackupsReplicationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `source_db_instance_arn`<sup>Required</sup> <a name="source_db_instance_arn" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.sourceDbInstanceArn"></a>

```python
source_db_instance_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#source_db_instance_arn DbInstanceAutomatedBackupsReplication#source_db_instance_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#id DbInstanceAutomatedBackupsReplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#kms_key_id DbInstanceAutomatedBackupsReplication#kms_key_id}.

---

##### `pre_signed_url`<sup>Optional</sup> <a name="pre_signed_url" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.preSignedUrl"></a>

```python
pre_signed_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#pre_signed_url DbInstanceAutomatedBackupsReplication#pre_signed_url}.

---

##### `retention_period`<sup>Optional</sup> <a name="retention_period" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.retentionPeriod"></a>

```python
retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#retention_period DbInstanceAutomatedBackupsReplication#retention_period}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.timeouts"></a>

```python
timeouts: DbInstanceAutomatedBackupsReplicationTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeouts">DbInstanceAutomatedBackupsReplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#timeouts DbInstanceAutomatedBackupsReplication#timeouts}

---

### DbInstanceAutomatedBackupsReplicationTimeouts <a name="DbInstanceAutomatedBackupsReplicationTimeouts" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import db_instance_automated_backups_replication

dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#create DbInstanceAutomatedBackupsReplication#create}. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#delete DbInstanceAutomatedBackupsReplication#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#create DbInstanceAutomatedBackupsReplication#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#delete DbInstanceAutomatedBackupsReplication#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference <a name="DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import db_instance_automated_backups_replication

dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeouts">DbInstanceAutomatedBackupsReplicationTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DbInstanceAutomatedBackupsReplicationTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeouts">DbInstanceAutomatedBackupsReplicationTimeouts</a>, cdktf.IResolvable]

---



