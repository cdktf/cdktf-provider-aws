# `redshiftdataStatement` Submodule <a name="`redshiftdataStatement` Submodule" id="@cdktf/provider-aws.redshiftdataStatement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftdataStatement <a name="RedshiftdataStatement" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement aws_redshiftdata_statement}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import redshiftdata_statement

redshiftdataStatement.RedshiftdataStatement(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database: str,
  sql: str,
  cluster_identifier: str = None,
  db_user: str = None,
  id: str = None,
  parameters: typing.Union[IResolvable, typing.List[RedshiftdataStatementParameters]] = None,
  secret_arn: str = None,
  statement_name: str = None,
  timeouts: RedshiftdataStatementTimeouts = None,
  with_event: typing.Union[bool, IResolvable] = None,
  workgroup_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.Initializer.parameter.database">database</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#database RedshiftdataStatement#database}. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.Initializer.parameter.sql">sql</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#sql RedshiftdataStatement#sql}. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.Initializer.parameter.clusterIdentifier">cluster_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#cluster_identifier RedshiftdataStatement#cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.Initializer.parameter.dbUser">db_user</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#db_user RedshiftdataStatement#db_user}. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#id RedshiftdataStatement#id}. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.Initializer.parameter.parameters">parameters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParameters">RedshiftdataStatementParameters</a>]]</code> | parameters block. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.Initializer.parameter.secretArn">secret_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#secret_arn RedshiftdataStatement#secret_arn}. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.Initializer.parameter.statementName">statement_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#statement_name RedshiftdataStatement#statement_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeouts">RedshiftdataStatementTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.Initializer.parameter.withEvent">with_event</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#with_event RedshiftdataStatement#with_event}. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.Initializer.parameter.workgroupName">workgroup_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#workgroup_name RedshiftdataStatement#workgroup_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.Initializer.parameter.database"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#database RedshiftdataStatement#database}.

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.Initializer.parameter.sql"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#sql RedshiftdataStatement#sql}.

---

##### `cluster_identifier`<sup>Optional</sup> <a name="cluster_identifier" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.Initializer.parameter.clusterIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#cluster_identifier RedshiftdataStatement#cluster_identifier}.

---

##### `db_user`<sup>Optional</sup> <a name="db_user" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.Initializer.parameter.dbUser"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#db_user RedshiftdataStatement#db_user}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#id RedshiftdataStatement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.Initializer.parameter.parameters"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParameters">RedshiftdataStatementParameters</a>]]

parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#parameters RedshiftdataStatement#parameters}

---

##### `secret_arn`<sup>Optional</sup> <a name="secret_arn" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.Initializer.parameter.secretArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#secret_arn RedshiftdataStatement#secret_arn}.

---

##### `statement_name`<sup>Optional</sup> <a name="statement_name" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.Initializer.parameter.statementName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#statement_name RedshiftdataStatement#statement_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeouts">RedshiftdataStatementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#timeouts RedshiftdataStatement#timeouts}

---

##### `with_event`<sup>Optional</sup> <a name="with_event" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.Initializer.parameter.withEvent"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#with_event RedshiftdataStatement#with_event}.

---

##### `workgroup_name`<sup>Optional</sup> <a name="workgroup_name" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.Initializer.parameter.workgroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#workgroup_name RedshiftdataStatement#workgroup_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.putParameters">put_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.resetClusterIdentifier">reset_cluster_identifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.resetDbUser">reset_db_user</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.resetSecretArn">reset_secret_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.resetStatementName">reset_statement_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.resetWithEvent">reset_with_event</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.resetWorkgroupName">reset_workgroup_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_parameters` <a name="put_parameters" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.putParameters"></a>

```python
def put_parameters(
  value: typing.Union[IResolvable, typing.List[RedshiftdataStatementParameters]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.putParameters.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParameters">RedshiftdataStatementParameters</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#create RedshiftdataStatement#create}.

---

##### `reset_cluster_identifier` <a name="reset_cluster_identifier" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.resetClusterIdentifier"></a>

```python
def reset_cluster_identifier() -> None
```

##### `reset_db_user` <a name="reset_db_user" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.resetDbUser"></a>

```python
def reset_db_user() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_secret_arn` <a name="reset_secret_arn" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.resetSecretArn"></a>

```python
def reset_secret_arn() -> None
```

##### `reset_statement_name` <a name="reset_statement_name" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.resetStatementName"></a>

```python
def reset_statement_name() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_with_event` <a name="reset_with_event" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.resetWithEvent"></a>

```python
def reset_with_event() -> None
```

##### `reset_workgroup_name` <a name="reset_workgroup_name" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.resetWorkgroupName"></a>

```python
def reset_workgroup_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import redshiftdata_statement

redshiftdataStatement.RedshiftdataStatement.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import redshiftdata_statement

redshiftdataStatement.RedshiftdataStatement.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import redshiftdata_statement

redshiftdataStatement.RedshiftdataStatement.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList">RedshiftdataStatementParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference">RedshiftdataStatementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.clusterIdentifierInput">cluster_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.dbUserInput">db_user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.parametersInput">parameters_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParameters">RedshiftdataStatementParameters</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.secretArnInput">secret_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.sqlInput">sql_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.statementNameInput">statement_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeouts">RedshiftdataStatementTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.withEventInput">with_event_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.workgroupNameInput">workgroup_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.clusterIdentifier">cluster_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.dbUser">db_user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.sql">sql</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.statementName">statement_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.withEvent">with_event</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.workgroupName">workgroup_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.parameters"></a>

```python
parameters: RedshiftdataStatementParametersList
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList">RedshiftdataStatementParametersList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.timeouts"></a>

```python
timeouts: RedshiftdataStatementTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference">RedshiftdataStatementTimeoutsOutputReference</a>

---

##### `cluster_identifier_input`<sup>Optional</sup> <a name="cluster_identifier_input" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.clusterIdentifierInput"></a>

```python
cluster_identifier_input: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `db_user_input`<sup>Optional</sup> <a name="db_user_input" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.dbUserInput"></a>

```python
db_user_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.parametersInput"></a>

```python
parameters_input: typing.Union[IResolvable, typing.List[RedshiftdataStatementParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParameters">RedshiftdataStatementParameters</a>]]

---

##### `secret_arn_input`<sup>Optional</sup> <a name="secret_arn_input" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.secretArnInput"></a>

```python
secret_arn_input: str
```

- *Type:* str

---

##### `sql_input`<sup>Optional</sup> <a name="sql_input" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.sqlInput"></a>

```python
sql_input: str
```

- *Type:* str

---

##### `statement_name_input`<sup>Optional</sup> <a name="statement_name_input" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.statementNameInput"></a>

```python
statement_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[RedshiftdataStatementTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeouts">RedshiftdataStatementTimeouts</a>, cdktf.IResolvable]

---

##### `with_event_input`<sup>Optional</sup> <a name="with_event_input" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.withEventInput"></a>

```python
with_event_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `workgroup_name_input`<sup>Optional</sup> <a name="workgroup_name_input" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.workgroupNameInput"></a>

```python
workgroup_name_input: str
```

- *Type:* str

---

##### `cluster_identifier`<sup>Required</sup> <a name="cluster_identifier" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.clusterIdentifier"></a>

```python
cluster_identifier: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `db_user`<sup>Required</sup> <a name="db_user" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.dbUser"></a>

```python
db_user: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.sql"></a>

```python
sql: str
```

- *Type:* str

---

##### `statement_name`<sup>Required</sup> <a name="statement_name" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.statementName"></a>

```python
statement_name: str
```

- *Type:* str

---

##### `with_event`<sup>Required</sup> <a name="with_event" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.withEvent"></a>

```python
with_event: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `workgroup_name`<sup>Required</sup> <a name="workgroup_name" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.workgroupName"></a>

```python
workgroup_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftdataStatementConfig <a name="RedshiftdataStatementConfig" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import redshiftdata_statement

redshiftdataStatement.RedshiftdataStatementConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database: str,
  sql: str,
  cluster_identifier: str = None,
  db_user: str = None,
  id: str = None,
  parameters: typing.Union[IResolvable, typing.List[RedshiftdataStatementParameters]] = None,
  secret_arn: str = None,
  statement_name: str = None,
  timeouts: RedshiftdataStatementTimeouts = None,
  with_event: typing.Union[bool, IResolvable] = None,
  workgroup_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.database">database</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#database RedshiftdataStatement#database}. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.sql">sql</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#sql RedshiftdataStatement#sql}. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.clusterIdentifier">cluster_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#cluster_identifier RedshiftdataStatement#cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.dbUser">db_user</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#db_user RedshiftdataStatement#db_user}. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#id RedshiftdataStatement#id}. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.parameters">parameters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParameters">RedshiftdataStatementParameters</a>]]</code> | parameters block. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.secretArn">secret_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#secret_arn RedshiftdataStatement#secret_arn}. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.statementName">statement_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#statement_name RedshiftdataStatement#statement_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeouts">RedshiftdataStatementTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.withEvent">with_event</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#with_event RedshiftdataStatement#with_event}. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.workgroupName">workgroup_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#workgroup_name RedshiftdataStatement#workgroup_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.database"></a>

```python
database: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#database RedshiftdataStatement#database}.

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.sql"></a>

```python
sql: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#sql RedshiftdataStatement#sql}.

---

##### `cluster_identifier`<sup>Optional</sup> <a name="cluster_identifier" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.clusterIdentifier"></a>

```python
cluster_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#cluster_identifier RedshiftdataStatement#cluster_identifier}.

---

##### `db_user`<sup>Optional</sup> <a name="db_user" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.dbUser"></a>

```python
db_user: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#db_user RedshiftdataStatement#db_user}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#id RedshiftdataStatement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.parameters"></a>

```python
parameters: typing.Union[IResolvable, typing.List[RedshiftdataStatementParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParameters">RedshiftdataStatementParameters</a>]]

parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#parameters RedshiftdataStatement#parameters}

---

##### `secret_arn`<sup>Optional</sup> <a name="secret_arn" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#secret_arn RedshiftdataStatement#secret_arn}.

---

##### `statement_name`<sup>Optional</sup> <a name="statement_name" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.statementName"></a>

```python
statement_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#statement_name RedshiftdataStatement#statement_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.timeouts"></a>

```python
timeouts: RedshiftdataStatementTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeouts">RedshiftdataStatementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#timeouts RedshiftdataStatement#timeouts}

---

##### `with_event`<sup>Optional</sup> <a name="with_event" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.withEvent"></a>

```python
with_event: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#with_event RedshiftdataStatement#with_event}.

---

##### `workgroup_name`<sup>Optional</sup> <a name="workgroup_name" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.workgroupName"></a>

```python
workgroup_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#workgroup_name RedshiftdataStatement#workgroup_name}.

---

### RedshiftdataStatementParameters <a name="RedshiftdataStatementParameters" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParameters.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import redshiftdata_statement

redshiftdataStatement.RedshiftdataStatementParameters(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParameters.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#name RedshiftdataStatement#name}. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParameters.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#value RedshiftdataStatement#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParameters.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#name RedshiftdataStatement#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParameters.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#value RedshiftdataStatement#value}.

---

### RedshiftdataStatementTimeouts <a name="RedshiftdataStatementTimeouts" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import redshiftdata_statement

redshiftdataStatement.RedshiftdataStatementTimeouts(
  create: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#create RedshiftdataStatement#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#create RedshiftdataStatement#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### RedshiftdataStatementParametersList <a name="RedshiftdataStatementParametersList" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import redshiftdata_statement

redshiftdataStatement.RedshiftdataStatementParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RedshiftdataStatementParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParameters">RedshiftdataStatementParameters</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[RedshiftdataStatementParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParameters">RedshiftdataStatementParameters</a>]]

---


### RedshiftdataStatementParametersOutputReference <a name="RedshiftdataStatementParametersOutputReference" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import redshiftdata_statement

redshiftdataStatement.RedshiftdataStatementParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParameters">RedshiftdataStatementParameters</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[RedshiftdataStatementParameters, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParameters">RedshiftdataStatementParameters</a>, cdktf.IResolvable]

---


### RedshiftdataStatementTimeoutsOutputReference <a name="RedshiftdataStatementTimeoutsOutputReference" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import redshiftdata_statement

redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeouts">RedshiftdataStatementTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[RedshiftdataStatementTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeouts">RedshiftdataStatementTimeouts</a>, cdktf.IResolvable]

---



