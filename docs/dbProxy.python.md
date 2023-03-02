# `dbProxy` Submodule <a name="`dbProxy` Submodule" id="@cdktf/provider-aws.dbProxy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DbProxy <a name="DbProxy" id="@cdktf/provider-aws.dbProxy.DbProxy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_proxy aws_db_proxy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbProxy.DbProxy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import db_proxy

dbProxy.DbProxy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  auth: typing.Union[IResolvable, typing.List[DbProxyAuth]],
  engine_family: str,
  name: str,
  role_arn: str,
  vpc_subnet_ids: typing.List[str],
  debug_logging: typing.Union[bool, IResolvable] = None,
  id: str = None,
  idle_client_timeout: typing.Union[int, float] = None,
  require_tls: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: DbProxyTimeouts = None,
  vpc_security_group_ids: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.Initializer.parameter.auth">auth</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dbProxy.DbProxyAuth">DbProxyAuth</a>]]</code> | auth block. |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.Initializer.parameter.engineFamily">engine_family</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#engine_family DbProxy#engine_family}. |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#name DbProxy#name}. |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#role_arn DbProxy#role_arn}. |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.Initializer.parameter.vpcSubnetIds">vpc_subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#vpc_subnet_ids DbProxy#vpc_subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.Initializer.parameter.debugLogging">debug_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#debug_logging DbProxy#debug_logging}. |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#id DbProxy#id}. |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.Initializer.parameter.idleClientTimeout">idle_client_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#idle_client_timeout DbProxy#idle_client_timeout}. |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.Initializer.parameter.requireTls">require_tls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#require_tls DbProxy#require_tls}. |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#tags DbProxy#tags}. |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#tags_all DbProxy#tags_all}. |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyTimeouts">DbProxyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.Initializer.parameter.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#vpc_security_group_ids DbProxy#vpc_security_group_ids}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dbProxy.DbProxy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dbProxy.DbProxy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dbProxy.DbProxy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dbProxy.DbProxy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dbProxy.DbProxy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dbProxy.DbProxy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dbProxy.DbProxy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dbProxy.DbProxy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dbProxy.DbProxy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auth`<sup>Required</sup> <a name="auth" id="@cdktf/provider-aws.dbProxy.DbProxy.Initializer.parameter.auth"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dbProxy.DbProxyAuth">DbProxyAuth</a>]]

auth block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#auth DbProxy#auth}

---

##### `engine_family`<sup>Required</sup> <a name="engine_family" id="@cdktf/provider-aws.dbProxy.DbProxy.Initializer.parameter.engineFamily"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#engine_family DbProxy#engine_family}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dbProxy.DbProxy.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#name DbProxy#name}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.dbProxy.DbProxy.Initializer.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#role_arn DbProxy#role_arn}.

---

##### `vpc_subnet_ids`<sup>Required</sup> <a name="vpc_subnet_ids" id="@cdktf/provider-aws.dbProxy.DbProxy.Initializer.parameter.vpcSubnetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#vpc_subnet_ids DbProxy#vpc_subnet_ids}.

---

##### `debug_logging`<sup>Optional</sup> <a name="debug_logging" id="@cdktf/provider-aws.dbProxy.DbProxy.Initializer.parameter.debugLogging"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#debug_logging DbProxy#debug_logging}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dbProxy.DbProxy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#id DbProxy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idle_client_timeout`<sup>Optional</sup> <a name="idle_client_timeout" id="@cdktf/provider-aws.dbProxy.DbProxy.Initializer.parameter.idleClientTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#idle_client_timeout DbProxy#idle_client_timeout}.

---

##### `require_tls`<sup>Optional</sup> <a name="require_tls" id="@cdktf/provider-aws.dbProxy.DbProxy.Initializer.parameter.requireTls"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#require_tls DbProxy#require_tls}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dbProxy.DbProxy.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#tags DbProxy#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.dbProxy.DbProxy.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#tags_all DbProxy#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dbProxy.DbProxy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dbProxy.DbProxyTimeouts">DbProxyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#timeouts DbProxy#timeouts}

---

##### `vpc_security_group_ids`<sup>Optional</sup> <a name="vpc_security_group_ids" id="@cdktf/provider-aws.dbProxy.DbProxy.Initializer.parameter.vpcSecurityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#vpc_security_group_ids DbProxy#vpc_security_group_ids}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.putAuth">put_auth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.resetDebugLogging">reset_debug_logging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.resetIdleClientTimeout">reset_idle_client_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.resetRequireTls">reset_require_tls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.resetVpcSecurityGroupIds">reset_vpc_security_group_ids</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dbProxy.DbProxy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dbProxy.DbProxy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dbProxy.DbProxy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dbProxy.DbProxy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dbProxy.DbProxy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dbProxy.DbProxy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dbProxy.DbProxy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dbProxy.DbProxy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dbProxy.DbProxy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dbProxy.DbProxy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbProxy.DbProxy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dbProxy.DbProxy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbProxy.DbProxy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dbProxy.DbProxy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbProxy.DbProxy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dbProxy.DbProxy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbProxy.DbProxy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dbProxy.DbProxy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbProxy.DbProxy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dbProxy.DbProxy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbProxy.DbProxy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dbProxy.DbProxy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbProxy.DbProxy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dbProxy.DbProxy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbProxy.DbProxy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dbProxy.DbProxy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbProxy.DbProxy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dbProxy.DbProxy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbProxy.DbProxy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_auth` <a name="put_auth" id="@cdktf/provider-aws.dbProxy.DbProxy.putAuth"></a>

```python
def put_auth(
  value: typing.Union[IResolvable, typing.List[DbProxyAuth]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dbProxy.DbProxy.putAuth.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dbProxy.DbProxyAuth">DbProxyAuth</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.dbProxy.DbProxy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.dbProxy.DbProxy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#create DbProxy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.dbProxy.DbProxy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#delete DbProxy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.dbProxy.DbProxy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#update DbProxy#update}.

---

##### `reset_debug_logging` <a name="reset_debug_logging" id="@cdktf/provider-aws.dbProxy.DbProxy.resetDebugLogging"></a>

```python
def reset_debug_logging() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dbProxy.DbProxy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_idle_client_timeout` <a name="reset_idle_client_timeout" id="@cdktf/provider-aws.dbProxy.DbProxy.resetIdleClientTimeout"></a>

```python
def reset_idle_client_timeout() -> None
```

##### `reset_require_tls` <a name="reset_require_tls" id="@cdktf/provider-aws.dbProxy.DbProxy.resetRequireTls"></a>

```python
def reset_require_tls() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dbProxy.DbProxy.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.dbProxy.DbProxy.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.dbProxy.DbProxy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_vpc_security_group_ids` <a name="reset_vpc_security_group_ids" id="@cdktf/provider-aws.dbProxy.DbProxy.resetVpcSecurityGroupIds"></a>

```python
def reset_vpc_security_group_ids() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dbProxy.DbProxy.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import db_proxy

dbProxy.DbProxy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dbProxy.DbProxy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dbProxy.DbProxy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import db_proxy

dbProxy.DbProxy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dbProxy.DbProxy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.dbProxy.DbProxy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import db_proxy

dbProxy.DbProxy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dbProxy.DbProxy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.property.auth">auth</a></code> | <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyAuthList">DbProxyAuthList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference">DbProxyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.property.authInput">auth_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dbProxy.DbProxyAuth">DbProxyAuth</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.property.debugLoggingInput">debug_logging_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.property.engineFamilyInput">engine_family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.property.idleClientTimeoutInput">idle_client_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.property.requireTlsInput">require_tls_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dbProxy.DbProxyTimeouts">DbProxyTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.property.vpcSecurityGroupIdsInput">vpc_security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.property.vpcSubnetIdsInput">vpc_subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.property.debugLogging">debug_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.property.engineFamily">engine_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.property.idleClientTimeout">idle_client_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.property.requireTls">require_tls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.property.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.property.vpcSubnetIds">vpc_subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dbProxy.DbProxy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dbProxy.DbProxy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dbProxy.DbProxy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dbProxy.DbProxy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dbProxy.DbProxy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dbProxy.DbProxy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dbProxy.DbProxy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dbProxy.DbProxy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dbProxy.DbProxy.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dbProxy.DbProxy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dbProxy.DbProxy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dbProxy.DbProxy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dbProxy.DbProxy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dbProxy.DbProxy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dbProxy.DbProxy.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `auth`<sup>Required</sup> <a name="auth" id="@cdktf/provider-aws.dbProxy.DbProxy.property.auth"></a>

```python
auth: DbProxyAuthList
```

- *Type:* <a href="#@cdktf/provider-aws.dbProxy.DbProxyAuthList">DbProxyAuthList</a>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.dbProxy.DbProxy.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dbProxy.DbProxy.property.timeouts"></a>

```python
timeouts: DbProxyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference">DbProxyTimeoutsOutputReference</a>

---

##### `auth_input`<sup>Optional</sup> <a name="auth_input" id="@cdktf/provider-aws.dbProxy.DbProxy.property.authInput"></a>

```python
auth_input: typing.Union[IResolvable, typing.List[DbProxyAuth]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dbProxy.DbProxyAuth">DbProxyAuth</a>]]

---

##### `debug_logging_input`<sup>Optional</sup> <a name="debug_logging_input" id="@cdktf/provider-aws.dbProxy.DbProxy.property.debugLoggingInput"></a>

```python
debug_logging_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `engine_family_input`<sup>Optional</sup> <a name="engine_family_input" id="@cdktf/provider-aws.dbProxy.DbProxy.property.engineFamilyInput"></a>

```python
engine_family_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dbProxy.DbProxy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `idle_client_timeout_input`<sup>Optional</sup> <a name="idle_client_timeout_input" id="@cdktf/provider-aws.dbProxy.DbProxy.property.idleClientTimeoutInput"></a>

```python
idle_client_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.dbProxy.DbProxy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `require_tls_input`<sup>Optional</sup> <a name="require_tls_input" id="@cdktf/provider-aws.dbProxy.DbProxy.property.requireTlsInput"></a>

```python
require_tls_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-aws.dbProxy.DbProxy.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.dbProxy.DbProxy.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dbProxy.DbProxy.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.dbProxy.DbProxy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DbProxyTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dbProxy.DbProxyTimeouts">DbProxyTimeouts</a>, cdktf.IResolvable]

---

##### `vpc_security_group_ids_input`<sup>Optional</sup> <a name="vpc_security_group_ids_input" id="@cdktf/provider-aws.dbProxy.DbProxy.property.vpcSecurityGroupIdsInput"></a>

```python
vpc_security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_subnet_ids_input`<sup>Optional</sup> <a name="vpc_subnet_ids_input" id="@cdktf/provider-aws.dbProxy.DbProxy.property.vpcSubnetIdsInput"></a>

```python
vpc_subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `debug_logging`<sup>Required</sup> <a name="debug_logging" id="@cdktf/provider-aws.dbProxy.DbProxy.property.debugLogging"></a>

```python
debug_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `engine_family`<sup>Required</sup> <a name="engine_family" id="@cdktf/provider-aws.dbProxy.DbProxy.property.engineFamily"></a>

```python
engine_family: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dbProxy.DbProxy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idle_client_timeout`<sup>Required</sup> <a name="idle_client_timeout" id="@cdktf/provider-aws.dbProxy.DbProxy.property.idleClientTimeout"></a>

```python
idle_client_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dbProxy.DbProxy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `require_tls`<sup>Required</sup> <a name="require_tls" id="@cdktf/provider-aws.dbProxy.DbProxy.property.requireTls"></a>

```python
require_tls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.dbProxy.DbProxy.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dbProxy.DbProxy.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.dbProxy.DbProxy.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `vpc_security_group_ids`<sup>Required</sup> <a name="vpc_security_group_ids" id="@cdktf/provider-aws.dbProxy.DbProxy.property.vpcSecurityGroupIds"></a>

```python
vpc_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_subnet_ids`<sup>Required</sup> <a name="vpc_subnet_ids" id="@cdktf/provider-aws.dbProxy.DbProxy.property.vpcSubnetIds"></a>

```python
vpc_subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dbProxy.DbProxy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DbProxyAuth <a name="DbProxyAuth" id="@cdktf/provider-aws.dbProxy.DbProxyAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dbProxy.DbProxyAuth.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import db_proxy

dbProxy.DbProxyAuth(
  auth_scheme: str = None,
  client_password_auth_type: str = None,
  description: str = None,
  iam_auth: str = None,
  secret_arn: str = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyAuth.property.authScheme">auth_scheme</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#auth_scheme DbProxy#auth_scheme}. |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyAuth.property.clientPasswordAuthType">client_password_auth_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#client_password_auth_type DbProxy#client_password_auth_type}. |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyAuth.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#description DbProxy#description}. |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyAuth.property.iamAuth">iam_auth</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#iam_auth DbProxy#iam_auth}. |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyAuth.property.secretArn">secret_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#secret_arn DbProxy#secret_arn}. |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyAuth.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#username DbProxy#username}. |

---

##### `auth_scheme`<sup>Optional</sup> <a name="auth_scheme" id="@cdktf/provider-aws.dbProxy.DbProxyAuth.property.authScheme"></a>

```python
auth_scheme: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#auth_scheme DbProxy#auth_scheme}.

---

##### `client_password_auth_type`<sup>Optional</sup> <a name="client_password_auth_type" id="@cdktf/provider-aws.dbProxy.DbProxyAuth.property.clientPasswordAuthType"></a>

```python
client_password_auth_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#client_password_auth_type DbProxy#client_password_auth_type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.dbProxy.DbProxyAuth.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#description DbProxy#description}.

---

##### `iam_auth`<sup>Optional</sup> <a name="iam_auth" id="@cdktf/provider-aws.dbProxy.DbProxyAuth.property.iamAuth"></a>

```python
iam_auth: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#iam_auth DbProxy#iam_auth}.

---

##### `secret_arn`<sup>Optional</sup> <a name="secret_arn" id="@cdktf/provider-aws.dbProxy.DbProxyAuth.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#secret_arn DbProxy#secret_arn}.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-aws.dbProxy.DbProxyAuth.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#username DbProxy#username}.

---

### DbProxyConfig <a name="DbProxyConfig" id="@cdktf/provider-aws.dbProxy.DbProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dbProxy.DbProxyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import db_proxy

dbProxy.DbProxyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  auth: typing.Union[IResolvable, typing.List[DbProxyAuth]],
  engine_family: str,
  name: str,
  role_arn: str,
  vpc_subnet_ids: typing.List[str],
  debug_logging: typing.Union[bool, IResolvable] = None,
  id: str = None,
  idle_client_timeout: typing.Union[int, float] = None,
  require_tls: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: DbProxyTimeouts = None,
  vpc_security_group_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyConfig.property.auth">auth</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dbProxy.DbProxyAuth">DbProxyAuth</a>]]</code> | auth block. |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyConfig.property.engineFamily">engine_family</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#engine_family DbProxy#engine_family}. |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#name DbProxy#name}. |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#role_arn DbProxy#role_arn}. |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyConfig.property.vpcSubnetIds">vpc_subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#vpc_subnet_ids DbProxy#vpc_subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyConfig.property.debugLogging">debug_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#debug_logging DbProxy#debug_logging}. |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#id DbProxy#id}. |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyConfig.property.idleClientTimeout">idle_client_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#idle_client_timeout DbProxy#idle_client_timeout}. |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyConfig.property.requireTls">require_tls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#require_tls DbProxy#require_tls}. |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#tags DbProxy#tags}. |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#tags_all DbProxy#tags_all}. |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyTimeouts">DbProxyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyConfig.property.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#vpc_security_group_ids DbProxy#vpc_security_group_ids}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dbProxy.DbProxyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dbProxy.DbProxyConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dbProxy.DbProxyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dbProxy.DbProxyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dbProxy.DbProxyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dbProxy.DbProxyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dbProxy.DbProxyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auth`<sup>Required</sup> <a name="auth" id="@cdktf/provider-aws.dbProxy.DbProxyConfig.property.auth"></a>

```python
auth: typing.Union[IResolvable, typing.List[DbProxyAuth]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dbProxy.DbProxyAuth">DbProxyAuth</a>]]

auth block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#auth DbProxy#auth}

---

##### `engine_family`<sup>Required</sup> <a name="engine_family" id="@cdktf/provider-aws.dbProxy.DbProxyConfig.property.engineFamily"></a>

```python
engine_family: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#engine_family DbProxy#engine_family}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dbProxy.DbProxyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#name DbProxy#name}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.dbProxy.DbProxyConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#role_arn DbProxy#role_arn}.

---

##### `vpc_subnet_ids`<sup>Required</sup> <a name="vpc_subnet_ids" id="@cdktf/provider-aws.dbProxy.DbProxyConfig.property.vpcSubnetIds"></a>

```python
vpc_subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#vpc_subnet_ids DbProxy#vpc_subnet_ids}.

---

##### `debug_logging`<sup>Optional</sup> <a name="debug_logging" id="@cdktf/provider-aws.dbProxy.DbProxyConfig.property.debugLogging"></a>

```python
debug_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#debug_logging DbProxy#debug_logging}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dbProxy.DbProxyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#id DbProxy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idle_client_timeout`<sup>Optional</sup> <a name="idle_client_timeout" id="@cdktf/provider-aws.dbProxy.DbProxyConfig.property.idleClientTimeout"></a>

```python
idle_client_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#idle_client_timeout DbProxy#idle_client_timeout}.

---

##### `require_tls`<sup>Optional</sup> <a name="require_tls" id="@cdktf/provider-aws.dbProxy.DbProxyConfig.property.requireTls"></a>

```python
require_tls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#require_tls DbProxy#require_tls}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dbProxy.DbProxyConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#tags DbProxy#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.dbProxy.DbProxyConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#tags_all DbProxy#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dbProxy.DbProxyConfig.property.timeouts"></a>

```python
timeouts: DbProxyTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.dbProxy.DbProxyTimeouts">DbProxyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#timeouts DbProxy#timeouts}

---

##### `vpc_security_group_ids`<sup>Optional</sup> <a name="vpc_security_group_ids" id="@cdktf/provider-aws.dbProxy.DbProxyConfig.property.vpcSecurityGroupIds"></a>

```python
vpc_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#vpc_security_group_ids DbProxy#vpc_security_group_ids}.

---

### DbProxyTimeouts <a name="DbProxyTimeouts" id="@cdktf/provider-aws.dbProxy.DbProxyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dbProxy.DbProxyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import db_proxy

dbProxy.DbProxyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#create DbProxy#create}. |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#delete DbProxy#delete}. |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#update DbProxy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.dbProxy.DbProxyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#create DbProxy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.dbProxy.DbProxyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#delete DbProxy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.dbProxy.DbProxyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy#update DbProxy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DbProxyAuthList <a name="DbProxyAuthList" id="@cdktf/provider-aws.dbProxy.DbProxyAuthList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbProxy.DbProxyAuthList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import db_proxy

dbProxy.DbProxyAuthList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyAuthList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyAuthList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyAuthList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dbProxy.DbProxyAuthList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbProxy.DbProxyAuthList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dbProxy.DbProxyAuthList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyAuthList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyAuthList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyAuthList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyAuthList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dbProxy.DbProxyAuthList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dbProxy.DbProxyAuthList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dbProxy.DbProxyAuthList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dbProxy.DbProxyAuthList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dbProxy.DbProxyAuthList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DbProxyAuthOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dbProxy.DbProxyAuthList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyAuthList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyAuthList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyAuthList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dbProxy.DbProxyAuth">DbProxyAuth</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dbProxy.DbProxyAuthList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dbProxy.DbProxyAuthList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dbProxy.DbProxyAuthList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DbProxyAuth]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dbProxy.DbProxyAuth">DbProxyAuth</a>]]

---


### DbProxyAuthOutputReference <a name="DbProxyAuthOutputReference" id="@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import db_proxy

dbProxy.DbProxyAuthOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.resetAuthScheme">reset_auth_scheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.resetClientPasswordAuthType">reset_client_password_auth_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.resetIamAuth">reset_iam_auth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.resetSecretArn">reset_secret_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.resetUsername">reset_username</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auth_scheme` <a name="reset_auth_scheme" id="@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.resetAuthScheme"></a>

```python
def reset_auth_scheme() -> None
```

##### `reset_client_password_auth_type` <a name="reset_client_password_auth_type" id="@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.resetClientPasswordAuthType"></a>

```python
def reset_client_password_auth_type() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_iam_auth` <a name="reset_iam_auth" id="@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.resetIamAuth"></a>

```python
def reset_iam_auth() -> None
```

##### `reset_secret_arn` <a name="reset_secret_arn" id="@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.resetSecretArn"></a>

```python
def reset_secret_arn() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.resetUsername"></a>

```python
def reset_username() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.property.authSchemeInput">auth_scheme_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.property.clientPasswordAuthTypeInput">client_password_auth_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.property.iamAuthInput">iam_auth_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.property.secretArnInput">secret_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.property.authScheme">auth_scheme</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.property.clientPasswordAuthType">client_password_auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.property.iamAuth">iam_auth</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dbProxy.DbProxyAuth">DbProxyAuth</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_scheme_input`<sup>Optional</sup> <a name="auth_scheme_input" id="@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.property.authSchemeInput"></a>

```python
auth_scheme_input: str
```

- *Type:* str

---

##### `client_password_auth_type_input`<sup>Optional</sup> <a name="client_password_auth_type_input" id="@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.property.clientPasswordAuthTypeInput"></a>

```python
client_password_auth_type_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `iam_auth_input`<sup>Optional</sup> <a name="iam_auth_input" id="@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.property.iamAuthInput"></a>

```python
iam_auth_input: str
```

- *Type:* str

---

##### `secret_arn_input`<sup>Optional</sup> <a name="secret_arn_input" id="@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.property.secretArnInput"></a>

```python
secret_arn_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `auth_scheme`<sup>Required</sup> <a name="auth_scheme" id="@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.property.authScheme"></a>

```python
auth_scheme: str
```

- *Type:* str

---

##### `client_password_auth_type`<sup>Required</sup> <a name="client_password_auth_type" id="@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.property.clientPasswordAuthType"></a>

```python
client_password_auth_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `iam_auth`<sup>Required</sup> <a name="iam_auth" id="@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.property.iamAuth"></a>

```python
iam_auth: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dbProxy.DbProxyAuthOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DbProxyAuth, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dbProxy.DbProxyAuth">DbProxyAuth</a>, cdktf.IResolvable]

---


### DbProxyTimeoutsOutputReference <a name="DbProxyTimeoutsOutputReference" id="@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import db_proxy

dbProxy.DbProxyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dbProxy.DbProxyTimeouts">DbProxyTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dbProxy.DbProxyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DbProxyTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dbProxy.DbProxyTimeouts">DbProxyTimeouts</a>, cdktf.IResolvable]

---



