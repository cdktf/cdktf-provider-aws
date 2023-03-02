# `dbProxyDefaultTargetGroup` Submodule <a name="`dbProxyDefaultTargetGroup` Submodule" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DbProxyDefaultTargetGroup <a name="DbProxyDefaultTargetGroup" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group aws_db_proxy_default_target_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import db_proxy_default_target_group

dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  db_proxy_name: str,
  connection_pool_config: DbProxyDefaultTargetGroupConnectionPoolConfig = None,
  id: str = None,
  timeouts: DbProxyDefaultTargetGroupTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.dbProxyName">db_proxy_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#db_proxy_name DbProxyDefaultTargetGroup#db_proxy_name}. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.connectionPoolConfig">connection_pool_config</a></code> | <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig">DbProxyDefaultTargetGroupConnectionPoolConfig</a></code> | connection_pool_config block. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#id DbProxyDefaultTargetGroup#id}. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeouts">DbProxyDefaultTargetGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `db_proxy_name`<sup>Required</sup> <a name="db_proxy_name" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.dbProxyName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#db_proxy_name DbProxyDefaultTargetGroup#db_proxy_name}.

---

##### `connection_pool_config`<sup>Optional</sup> <a name="connection_pool_config" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.connectionPoolConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig">DbProxyDefaultTargetGroupConnectionPoolConfig</a>

connection_pool_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#connection_pool_config DbProxyDefaultTargetGroup#connection_pool_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#id DbProxyDefaultTargetGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeouts">DbProxyDefaultTargetGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#timeouts DbProxyDefaultTargetGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.putConnectionPoolConfig">put_connection_pool_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.resetConnectionPoolConfig">reset_connection_pool_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_connection_pool_config` <a name="put_connection_pool_config" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.putConnectionPoolConfig"></a>

```python
def put_connection_pool_config(
  connection_borrow_timeout: typing.Union[int, float] = None,
  init_query: str = None,
  max_connections_percent: typing.Union[int, float] = None,
  max_idle_connections_percent: typing.Union[int, float] = None,
  session_pinning_filters: typing.List[str] = None
) -> None
```

###### `connection_borrow_timeout`<sup>Optional</sup> <a name="connection_borrow_timeout" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.putConnectionPoolConfig.parameter.connectionBorrowTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#connection_borrow_timeout DbProxyDefaultTargetGroup#connection_borrow_timeout}.

---

###### `init_query`<sup>Optional</sup> <a name="init_query" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.putConnectionPoolConfig.parameter.initQuery"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#init_query DbProxyDefaultTargetGroup#init_query}.

---

###### `max_connections_percent`<sup>Optional</sup> <a name="max_connections_percent" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.putConnectionPoolConfig.parameter.maxConnectionsPercent"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#max_connections_percent DbProxyDefaultTargetGroup#max_connections_percent}.

---

###### `max_idle_connections_percent`<sup>Optional</sup> <a name="max_idle_connections_percent" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.putConnectionPoolConfig.parameter.maxIdleConnectionsPercent"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#max_idle_connections_percent DbProxyDefaultTargetGroup#max_idle_connections_percent}.

---

###### `session_pinning_filters`<sup>Optional</sup> <a name="session_pinning_filters" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.putConnectionPoolConfig.parameter.sessionPinningFilters"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#session_pinning_filters DbProxyDefaultTargetGroup#session_pinning_filters}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#create DbProxyDefaultTargetGroup#create}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#update DbProxyDefaultTargetGroup#update}.

---

##### `reset_connection_pool_config` <a name="reset_connection_pool_config" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.resetConnectionPoolConfig"></a>

```python
def reset_connection_pool_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import db_proxy_default_target_group

dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import db_proxy_default_target_group

dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import db_proxy_default_target_group

dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.connectionPoolConfig">connection_pool_config</a></code> | <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference">DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference">DbProxyDefaultTargetGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.connectionPoolConfigInput">connection_pool_config_input</a></code> | <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig">DbProxyDefaultTargetGroupConnectionPoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.dbProxyNameInput">db_proxy_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeouts">DbProxyDefaultTargetGroupTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.dbProxyName">db_proxy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `connection_pool_config`<sup>Required</sup> <a name="connection_pool_config" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.connectionPoolConfig"></a>

```python
connection_pool_config: DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference">DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.timeouts"></a>

```python
timeouts: DbProxyDefaultTargetGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference">DbProxyDefaultTargetGroupTimeoutsOutputReference</a>

---

##### `connection_pool_config_input`<sup>Optional</sup> <a name="connection_pool_config_input" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.connectionPoolConfigInput"></a>

```python
connection_pool_config_input: DbProxyDefaultTargetGroupConnectionPoolConfig
```

- *Type:* <a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig">DbProxyDefaultTargetGroupConnectionPoolConfig</a>

---

##### `db_proxy_name_input`<sup>Optional</sup> <a name="db_proxy_name_input" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.dbProxyNameInput"></a>

```python
db_proxy_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DbProxyDefaultTargetGroupTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeouts">DbProxyDefaultTargetGroupTimeouts</a>, cdktf.IResolvable]

---

##### `db_proxy_name`<sup>Required</sup> <a name="db_proxy_name" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.dbProxyName"></a>

```python
db_proxy_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DbProxyDefaultTargetGroupConfig <a name="DbProxyDefaultTargetGroupConfig" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import db_proxy_default_target_group

dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  db_proxy_name: str,
  connection_pool_config: DbProxyDefaultTargetGroupConnectionPoolConfig = None,
  id: str = None,
  timeouts: DbProxyDefaultTargetGroupTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.dbProxyName">db_proxy_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#db_proxy_name DbProxyDefaultTargetGroup#db_proxy_name}. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.connectionPoolConfig">connection_pool_config</a></code> | <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig">DbProxyDefaultTargetGroupConnectionPoolConfig</a></code> | connection_pool_config block. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#id DbProxyDefaultTargetGroup#id}. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeouts">DbProxyDefaultTargetGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `db_proxy_name`<sup>Required</sup> <a name="db_proxy_name" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.dbProxyName"></a>

```python
db_proxy_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#db_proxy_name DbProxyDefaultTargetGroup#db_proxy_name}.

---

##### `connection_pool_config`<sup>Optional</sup> <a name="connection_pool_config" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.connectionPoolConfig"></a>

```python
connection_pool_config: DbProxyDefaultTargetGroupConnectionPoolConfig
```

- *Type:* <a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig">DbProxyDefaultTargetGroupConnectionPoolConfig</a>

connection_pool_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#connection_pool_config DbProxyDefaultTargetGroup#connection_pool_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#id DbProxyDefaultTargetGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.timeouts"></a>

```python
timeouts: DbProxyDefaultTargetGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeouts">DbProxyDefaultTargetGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#timeouts DbProxyDefaultTargetGroup#timeouts}

---

### DbProxyDefaultTargetGroupConnectionPoolConfig <a name="DbProxyDefaultTargetGroupConnectionPoolConfig" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import db_proxy_default_target_group

dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig(
  connection_borrow_timeout: typing.Union[int, float] = None,
  init_query: str = None,
  max_connections_percent: typing.Union[int, float] = None,
  max_idle_connections_percent: typing.Union[int, float] = None,
  session_pinning_filters: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig.property.connectionBorrowTimeout">connection_borrow_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#connection_borrow_timeout DbProxyDefaultTargetGroup#connection_borrow_timeout}. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig.property.initQuery">init_query</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#init_query DbProxyDefaultTargetGroup#init_query}. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig.property.maxConnectionsPercent">max_connections_percent</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#max_connections_percent DbProxyDefaultTargetGroup#max_connections_percent}. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig.property.maxIdleConnectionsPercent">max_idle_connections_percent</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#max_idle_connections_percent DbProxyDefaultTargetGroup#max_idle_connections_percent}. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig.property.sessionPinningFilters">session_pinning_filters</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#session_pinning_filters DbProxyDefaultTargetGroup#session_pinning_filters}. |

---

##### `connection_borrow_timeout`<sup>Optional</sup> <a name="connection_borrow_timeout" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig.property.connectionBorrowTimeout"></a>

```python
connection_borrow_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#connection_borrow_timeout DbProxyDefaultTargetGroup#connection_borrow_timeout}.

---

##### `init_query`<sup>Optional</sup> <a name="init_query" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig.property.initQuery"></a>

```python
init_query: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#init_query DbProxyDefaultTargetGroup#init_query}.

---

##### `max_connections_percent`<sup>Optional</sup> <a name="max_connections_percent" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig.property.maxConnectionsPercent"></a>

```python
max_connections_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#max_connections_percent DbProxyDefaultTargetGroup#max_connections_percent}.

---

##### `max_idle_connections_percent`<sup>Optional</sup> <a name="max_idle_connections_percent" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig.property.maxIdleConnectionsPercent"></a>

```python
max_idle_connections_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#max_idle_connections_percent DbProxyDefaultTargetGroup#max_idle_connections_percent}.

---

##### `session_pinning_filters`<sup>Optional</sup> <a name="session_pinning_filters" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig.property.sessionPinningFilters"></a>

```python
session_pinning_filters: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#session_pinning_filters DbProxyDefaultTargetGroup#session_pinning_filters}.

---

### DbProxyDefaultTargetGroupTimeouts <a name="DbProxyDefaultTargetGroupTimeouts" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import db_proxy_default_target_group

dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeouts(
  create: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#create DbProxyDefaultTargetGroup#create}. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#update DbProxyDefaultTargetGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#create DbProxyDefaultTargetGroup#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#update DbProxyDefaultTargetGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference <a name="DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import db_proxy_default_target_group

dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.resetConnectionBorrowTimeout">reset_connection_borrow_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.resetInitQuery">reset_init_query</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.resetMaxConnectionsPercent">reset_max_connections_percent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.resetMaxIdleConnectionsPercent">reset_max_idle_connections_percent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.resetSessionPinningFilters">reset_session_pinning_filters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_connection_borrow_timeout` <a name="reset_connection_borrow_timeout" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.resetConnectionBorrowTimeout"></a>

```python
def reset_connection_borrow_timeout() -> None
```

##### `reset_init_query` <a name="reset_init_query" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.resetInitQuery"></a>

```python
def reset_init_query() -> None
```

##### `reset_max_connections_percent` <a name="reset_max_connections_percent" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.resetMaxConnectionsPercent"></a>

```python
def reset_max_connections_percent() -> None
```

##### `reset_max_idle_connections_percent` <a name="reset_max_idle_connections_percent" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.resetMaxIdleConnectionsPercent"></a>

```python
def reset_max_idle_connections_percent() -> None
```

##### `reset_session_pinning_filters` <a name="reset_session_pinning_filters" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.resetSessionPinningFilters"></a>

```python
def reset_session_pinning_filters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.connectionBorrowTimeoutInput">connection_borrow_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.initQueryInput">init_query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.maxConnectionsPercentInput">max_connections_percent_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.maxIdleConnectionsPercentInput">max_idle_connections_percent_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.sessionPinningFiltersInput">session_pinning_filters_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.connectionBorrowTimeout">connection_borrow_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.initQuery">init_query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.maxConnectionsPercent">max_connections_percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.maxIdleConnectionsPercent">max_idle_connections_percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.sessionPinningFilters">session_pinning_filters</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig">DbProxyDefaultTargetGroupConnectionPoolConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_borrow_timeout_input`<sup>Optional</sup> <a name="connection_borrow_timeout_input" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.connectionBorrowTimeoutInput"></a>

```python
connection_borrow_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `init_query_input`<sup>Optional</sup> <a name="init_query_input" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.initQueryInput"></a>

```python
init_query_input: str
```

- *Type:* str

---

##### `max_connections_percent_input`<sup>Optional</sup> <a name="max_connections_percent_input" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.maxConnectionsPercentInput"></a>

```python
max_connections_percent_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_idle_connections_percent_input`<sup>Optional</sup> <a name="max_idle_connections_percent_input" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.maxIdleConnectionsPercentInput"></a>

```python
max_idle_connections_percent_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `session_pinning_filters_input`<sup>Optional</sup> <a name="session_pinning_filters_input" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.sessionPinningFiltersInput"></a>

```python
session_pinning_filters_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `connection_borrow_timeout`<sup>Required</sup> <a name="connection_borrow_timeout" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.connectionBorrowTimeout"></a>

```python
connection_borrow_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `init_query`<sup>Required</sup> <a name="init_query" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.initQuery"></a>

```python
init_query: str
```

- *Type:* str

---

##### `max_connections_percent`<sup>Required</sup> <a name="max_connections_percent" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.maxConnectionsPercent"></a>

```python
max_connections_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_idle_connections_percent`<sup>Required</sup> <a name="max_idle_connections_percent" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.maxIdleConnectionsPercent"></a>

```python
max_idle_connections_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `session_pinning_filters`<sup>Required</sup> <a name="session_pinning_filters" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.sessionPinningFilters"></a>

```python
session_pinning_filters: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.internalValue"></a>

```python
internal_value: DbProxyDefaultTargetGroupConnectionPoolConfig
```

- *Type:* <a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig">DbProxyDefaultTargetGroupConnectionPoolConfig</a>

---


### DbProxyDefaultTargetGroupTimeoutsOutputReference <a name="DbProxyDefaultTargetGroupTimeoutsOutputReference" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import db_proxy_default_target_group

dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeouts">DbProxyDefaultTargetGroupTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DbProxyDefaultTargetGroupTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeouts">DbProxyDefaultTargetGroupTimeouts</a>, cdktf.IResolvable]

---



