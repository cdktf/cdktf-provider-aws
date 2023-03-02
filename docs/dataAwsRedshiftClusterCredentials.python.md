# `dataAwsRedshiftClusterCredentials` Submodule <a name="`dataAwsRedshiftClusterCredentials` Submodule" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRedshiftClusterCredentials <a name="DataAwsRedshiftClusterCredentials" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials aws_redshift_cluster_credentials}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_redshift_cluster_credentials

dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_identifier: str,
  db_user: str,
  auto_create: typing.Union[bool, IResolvable] = None,
  db_groups: typing.List[str] = None,
  db_name: str = None,
  duration_seconds: typing.Union[int, float] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.Initializer.parameter.clusterIdentifier">cluster_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#cluster_identifier DataAwsRedshiftClusterCredentials#cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.Initializer.parameter.dbUser">db_user</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#db_user DataAwsRedshiftClusterCredentials#db_user}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.Initializer.parameter.autoCreate">auto_create</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#auto_create DataAwsRedshiftClusterCredentials#auto_create}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.Initializer.parameter.dbGroups">db_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#db_groups DataAwsRedshiftClusterCredentials#db_groups}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.Initializer.parameter.dbName">db_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#db_name DataAwsRedshiftClusterCredentials#db_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.Initializer.parameter.durationSeconds">duration_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#duration_seconds DataAwsRedshiftClusterCredentials#duration_seconds}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#id DataAwsRedshiftClusterCredentials#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_identifier`<sup>Required</sup> <a name="cluster_identifier" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.Initializer.parameter.clusterIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#cluster_identifier DataAwsRedshiftClusterCredentials#cluster_identifier}.

---

##### `db_user`<sup>Required</sup> <a name="db_user" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.Initializer.parameter.dbUser"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#db_user DataAwsRedshiftClusterCredentials#db_user}.

---

##### `auto_create`<sup>Optional</sup> <a name="auto_create" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.Initializer.parameter.autoCreate"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#auto_create DataAwsRedshiftClusterCredentials#auto_create}.

---

##### `db_groups`<sup>Optional</sup> <a name="db_groups" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.Initializer.parameter.dbGroups"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#db_groups DataAwsRedshiftClusterCredentials#db_groups}.

---

##### `db_name`<sup>Optional</sup> <a name="db_name" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.Initializer.parameter.dbName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#db_name DataAwsRedshiftClusterCredentials#db_name}.

---

##### `duration_seconds`<sup>Optional</sup> <a name="duration_seconds" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.Initializer.parameter.durationSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#duration_seconds DataAwsRedshiftClusterCredentials#duration_seconds}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#id DataAwsRedshiftClusterCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.resetAutoCreate">reset_auto_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.resetDbGroups">reset_db_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.resetDbName">reset_db_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.resetDurationSeconds">reset_duration_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_auto_create` <a name="reset_auto_create" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.resetAutoCreate"></a>

```python
def reset_auto_create() -> None
```

##### `reset_db_groups` <a name="reset_db_groups" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.resetDbGroups"></a>

```python
def reset_db_groups() -> None
```

##### `reset_db_name` <a name="reset_db_name" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.resetDbName"></a>

```python
def reset_db_name() -> None
```

##### `reset_duration_seconds` <a name="reset_duration_seconds" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.resetDurationSeconds"></a>

```python
def reset_duration_seconds() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_redshift_cluster_credentials

dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_redshift_cluster_credentials

dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_redshift_cluster_credentials

dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dbPassword">db_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.expiration">expiration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.autoCreateInput">auto_create_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.clusterIdentifierInput">cluster_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dbGroupsInput">db_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dbNameInput">db_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dbUserInput">db_user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.durationSecondsInput">duration_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.autoCreate">auto_create</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.clusterIdentifier">cluster_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dbGroups">db_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dbName">db_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dbUser">db_user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.durationSeconds">duration_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `db_password`<sup>Required</sup> <a name="db_password" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dbPassword"></a>

```python
db_password: str
```

- *Type:* str

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.expiration"></a>

```python
expiration: str
```

- *Type:* str

---

##### `auto_create_input`<sup>Optional</sup> <a name="auto_create_input" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.autoCreateInput"></a>

```python
auto_create_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cluster_identifier_input`<sup>Optional</sup> <a name="cluster_identifier_input" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.clusterIdentifierInput"></a>

```python
cluster_identifier_input: str
```

- *Type:* str

---

##### `db_groups_input`<sup>Optional</sup> <a name="db_groups_input" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dbGroupsInput"></a>

```python
db_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `db_name_input`<sup>Optional</sup> <a name="db_name_input" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dbNameInput"></a>

```python
db_name_input: str
```

- *Type:* str

---

##### `db_user_input`<sup>Optional</sup> <a name="db_user_input" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dbUserInput"></a>

```python
db_user_input: str
```

- *Type:* str

---

##### `duration_seconds_input`<sup>Optional</sup> <a name="duration_seconds_input" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.durationSecondsInput"></a>

```python
duration_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `auto_create`<sup>Required</sup> <a name="auto_create" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.autoCreate"></a>

```python
auto_create: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cluster_identifier`<sup>Required</sup> <a name="cluster_identifier" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.clusterIdentifier"></a>

```python
cluster_identifier: str
```

- *Type:* str

---

##### `db_groups`<sup>Required</sup> <a name="db_groups" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dbGroups"></a>

```python
db_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `db_name`<sup>Required</sup> <a name="db_name" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dbName"></a>

```python
db_name: str
```

- *Type:* str

---

##### `db_user`<sup>Required</sup> <a name="db_user" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dbUser"></a>

```python
db_user: str
```

- *Type:* str

---

##### `duration_seconds`<sup>Required</sup> <a name="duration_seconds" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.durationSeconds"></a>

```python
duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRedshiftClusterCredentialsConfig <a name="DataAwsRedshiftClusterCredentialsConfig" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_redshift_cluster_credentials

dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_identifier: str,
  db_user: str,
  auto_create: typing.Union[bool, IResolvable] = None,
  db_groups: typing.List[str] = None,
  db_name: str = None,
  duration_seconds: typing.Union[int, float] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.clusterIdentifier">cluster_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#cluster_identifier DataAwsRedshiftClusterCredentials#cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.dbUser">db_user</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#db_user DataAwsRedshiftClusterCredentials#db_user}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.autoCreate">auto_create</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#auto_create DataAwsRedshiftClusterCredentials#auto_create}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.dbGroups">db_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#db_groups DataAwsRedshiftClusterCredentials#db_groups}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.dbName">db_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#db_name DataAwsRedshiftClusterCredentials#db_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.durationSeconds">duration_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#duration_seconds DataAwsRedshiftClusterCredentials#duration_seconds}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#id DataAwsRedshiftClusterCredentials#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_identifier`<sup>Required</sup> <a name="cluster_identifier" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.clusterIdentifier"></a>

```python
cluster_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#cluster_identifier DataAwsRedshiftClusterCredentials#cluster_identifier}.

---

##### `db_user`<sup>Required</sup> <a name="db_user" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.dbUser"></a>

```python
db_user: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#db_user DataAwsRedshiftClusterCredentials#db_user}.

---

##### `auto_create`<sup>Optional</sup> <a name="auto_create" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.autoCreate"></a>

```python
auto_create: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#auto_create DataAwsRedshiftClusterCredentials#auto_create}.

---

##### `db_groups`<sup>Optional</sup> <a name="db_groups" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.dbGroups"></a>

```python
db_groups: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#db_groups DataAwsRedshiftClusterCredentials#db_groups}.

---

##### `db_name`<sup>Optional</sup> <a name="db_name" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.dbName"></a>

```python
db_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#db_name DataAwsRedshiftClusterCredentials#db_name}.

---

##### `duration_seconds`<sup>Optional</sup> <a name="duration_seconds" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.durationSeconds"></a>

```python
duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#duration_seconds DataAwsRedshiftClusterCredentials#duration_seconds}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#id DataAwsRedshiftClusterCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



