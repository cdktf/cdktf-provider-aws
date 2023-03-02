# `quicksightDataSource` Submodule <a name="`quicksightDataSource` Submodule" id="@cdktf/provider-aws.quicksightDataSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightDataSource <a name="QuicksightDataSource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source aws_quicksight_data_source}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_data_source

quicksightDataSource.QuicksightDataSource(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_source_id: str,
  name: str,
  parameters: QuicksightDataSourceParameters,
  type: str,
  aws_account_id: str = None,
  credentials: QuicksightDataSourceCredentials = None,
  id: str = None,
  permission: typing.Union[IResolvable, typing.List[QuicksightDataSourcePermission]] = None,
  ssl_properties: QuicksightDataSourceSslProperties = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  vpc_connection_properties: QuicksightDataSourceVpcConnectionProperties = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.dataSourceId">data_source_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#data_source_id QuicksightDataSource#data_source_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#name QuicksightDataSource#name}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters">QuicksightDataSourceParameters</a></code> | parameters block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#type QuicksightDataSource#type}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.awsAccountId">aws_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#aws_account_id QuicksightDataSource#aws_account_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.credentials">credentials</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentials">QuicksightDataSourceCredentials</a></code> | credentials block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#id QuicksightDataSource#id}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.permission">permission</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermission">QuicksightDataSourcePermission</a>]]</code> | permission block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.sslProperties">ssl_properties</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslProperties">QuicksightDataSourceSslProperties</a></code> | ssl_properties block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#tags QuicksightDataSource#tags}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#tags_all QuicksightDataSource#tags_all}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.vpcConnectionProperties">vpc_connection_properties</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionProperties">QuicksightDataSourceVpcConnectionProperties</a></code> | vpc_connection_properties block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_source_id`<sup>Required</sup> <a name="data_source_id" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.dataSourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#data_source_id QuicksightDataSource#data_source_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#name QuicksightDataSource#name}.

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.parameters"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters">QuicksightDataSourceParameters</a>

parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#parameters QuicksightDataSource#parameters}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#type QuicksightDataSource#type}.

---

##### `aws_account_id`<sup>Optional</sup> <a name="aws_account_id" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.awsAccountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#aws_account_id QuicksightDataSource#aws_account_id}.

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.credentials"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentials">QuicksightDataSourceCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#credentials QuicksightDataSource#credentials}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#id QuicksightDataSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.permission"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermission">QuicksightDataSourcePermission</a>]]

permission block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#permission QuicksightDataSource#permission}

---

##### `ssl_properties`<sup>Optional</sup> <a name="ssl_properties" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.sslProperties"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslProperties">QuicksightDataSourceSslProperties</a>

ssl_properties block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#ssl_properties QuicksightDataSource#ssl_properties}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#tags QuicksightDataSource#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#tags_all QuicksightDataSource#tags_all}.

---

##### `vpc_connection_properties`<sup>Optional</sup> <a name="vpc_connection_properties" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.vpcConnectionProperties"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionProperties">QuicksightDataSourceVpcConnectionProperties</a>

vpc_connection_properties block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#vpc_connection_properties QuicksightDataSource#vpc_connection_properties}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putCredentials">put_credentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putParameters">put_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putPermission">put_permission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putSslProperties">put_ssl_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putVpcConnectionProperties">put_vpc_connection_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetAwsAccountId">reset_aws_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetCredentials">reset_credentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetPermission">reset_permission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetSslProperties">reset_ssl_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetVpcConnectionProperties">reset_vpc_connection_properties</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_credentials` <a name="put_credentials" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putCredentials"></a>

```python
def put_credentials(
  copy_source_arn: str = None,
  credential_pair: QuicksightDataSourceCredentialsCredentialPair = None
) -> None
```

###### `copy_source_arn`<sup>Optional</sup> <a name="copy_source_arn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putCredentials.parameter.copySourceArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#copy_source_arn QuicksightDataSource#copy_source_arn}.

---

###### `credential_pair`<sup>Optional</sup> <a name="credential_pair" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putCredentials.parameter.credentialPair"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPair">QuicksightDataSourceCredentialsCredentialPair</a>

credential_pair block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#credential_pair QuicksightDataSource#credential_pair}

---

##### `put_parameters` <a name="put_parameters" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putParameters"></a>

```python
def put_parameters(
  amazon_elasticsearch: QuicksightDataSourceParametersAmazonElasticsearch = None,
  athena: QuicksightDataSourceParametersAthena = None,
  aurora: QuicksightDataSourceParametersAurora = None,
  aurora_postgresql: QuicksightDataSourceParametersAuroraPostgresql = None,
  aws_iot_analytics: QuicksightDataSourceParametersAwsIotAnalytics = None,
  jira: QuicksightDataSourceParametersJira = None,
  maria_db: QuicksightDataSourceParametersMariaDb = None,
  mysql: QuicksightDataSourceParametersMysql = None,
  oracle: QuicksightDataSourceParametersOracle = None,
  postgresql: QuicksightDataSourceParametersPostgresql = None,
  presto: QuicksightDataSourceParametersPresto = None,
  rds: QuicksightDataSourceParametersRds = None,
  redshift: QuicksightDataSourceParametersRedshift = None,
  s3: QuicksightDataSourceParametersS3 = None,
  service_now: QuicksightDataSourceParametersServiceNow = None,
  snowflake: QuicksightDataSourceParametersSnowflake = None,
  spark: QuicksightDataSourceParametersSpark = None,
  sql_server: QuicksightDataSourceParametersSqlServer = None,
  teradata: QuicksightDataSourceParametersTeradata = None,
  twitter: QuicksightDataSourceParametersTwitter = None
) -> None
```

###### `amazon_elasticsearch`<sup>Optional</sup> <a name="amazon_elasticsearch" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putParameters.parameter.amazonElasticsearch"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearch">QuicksightDataSourceParametersAmazonElasticsearch</a>

amazon_elasticsearch block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#amazon_elasticsearch QuicksightDataSource#amazon_elasticsearch}

---

###### `athena`<sup>Optional</sup> <a name="athena" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putParameters.parameter.athena"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthena">QuicksightDataSourceParametersAthena</a>

athena block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#athena QuicksightDataSource#athena}

---

###### `aurora`<sup>Optional</sup> <a name="aurora" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putParameters.parameter.aurora"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAurora">QuicksightDataSourceParametersAurora</a>

aurora block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#aurora QuicksightDataSource#aurora}

---

###### `aurora_postgresql`<sup>Optional</sup> <a name="aurora_postgresql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putParameters.parameter.auroraPostgresql"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresql">QuicksightDataSourceParametersAuroraPostgresql</a>

aurora_postgresql block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#aurora_postgresql QuicksightDataSource#aurora_postgresql}

---

###### `aws_iot_analytics`<sup>Optional</sup> <a name="aws_iot_analytics" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putParameters.parameter.awsIotAnalytics"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalytics">QuicksightDataSourceParametersAwsIotAnalytics</a>

aws_iot_analytics block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#aws_iot_analytics QuicksightDataSource#aws_iot_analytics}

---

###### `jira`<sup>Optional</sup> <a name="jira" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putParameters.parameter.jira"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJira">QuicksightDataSourceParametersJira</a>

jira block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#jira QuicksightDataSource#jira}

---

###### `maria_db`<sup>Optional</sup> <a name="maria_db" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putParameters.parameter.mariaDb"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDb">QuicksightDataSourceParametersMariaDb</a>

maria_db block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#maria_db QuicksightDataSource#maria_db}

---

###### `mysql`<sup>Optional</sup> <a name="mysql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putParameters.parameter.mysql"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysql">QuicksightDataSourceParametersMysql</a>

mysql block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#mysql QuicksightDataSource#mysql}

---

###### `oracle`<sup>Optional</sup> <a name="oracle" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putParameters.parameter.oracle"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracle">QuicksightDataSourceParametersOracle</a>

oracle block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#oracle QuicksightDataSource#oracle}

---

###### `postgresql`<sup>Optional</sup> <a name="postgresql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putParameters.parameter.postgresql"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresql">QuicksightDataSourceParametersPostgresql</a>

postgresql block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#postgresql QuicksightDataSource#postgresql}

---

###### `presto`<sup>Optional</sup> <a name="presto" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putParameters.parameter.presto"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPresto">QuicksightDataSourceParametersPresto</a>

presto block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#presto QuicksightDataSource#presto}

---

###### `rds`<sup>Optional</sup> <a name="rds" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putParameters.parameter.rds"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRds">QuicksightDataSourceParametersRds</a>

rds block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#rds QuicksightDataSource#rds}

---

###### `redshift`<sup>Optional</sup> <a name="redshift" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putParameters.parameter.redshift"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift">QuicksightDataSourceParametersRedshift</a>

redshift block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#redshift QuicksightDataSource#redshift}

---

###### `s3`<sup>Optional</sup> <a name="s3" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putParameters.parameter.s3"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3">QuicksightDataSourceParametersS3</a>

s3 block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#s3 QuicksightDataSource#s3}

---

###### `service_now`<sup>Optional</sup> <a name="service_now" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putParameters.parameter.serviceNow"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNow">QuicksightDataSourceParametersServiceNow</a>

service_now block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#service_now QuicksightDataSource#service_now}

---

###### `snowflake`<sup>Optional</sup> <a name="snowflake" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putParameters.parameter.snowflake"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflake">QuicksightDataSourceParametersSnowflake</a>

snowflake block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#snowflake QuicksightDataSource#snowflake}

---

###### `spark`<sup>Optional</sup> <a name="spark" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putParameters.parameter.spark"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSpark">QuicksightDataSourceParametersSpark</a>

spark block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#spark QuicksightDataSource#spark}

---

###### `sql_server`<sup>Optional</sup> <a name="sql_server" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putParameters.parameter.sqlServer"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServer">QuicksightDataSourceParametersSqlServer</a>

sql_server block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#sql_server QuicksightDataSource#sql_server}

---

###### `teradata`<sup>Optional</sup> <a name="teradata" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putParameters.parameter.teradata"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradata">QuicksightDataSourceParametersTeradata</a>

teradata block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#teradata QuicksightDataSource#teradata}

---

###### `twitter`<sup>Optional</sup> <a name="twitter" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putParameters.parameter.twitter"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitter">QuicksightDataSourceParametersTwitter</a>

twitter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#twitter QuicksightDataSource#twitter}

---

##### `put_permission` <a name="put_permission" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putPermission"></a>

```python
def put_permission(
  value: typing.Union[IResolvable, typing.List[QuicksightDataSourcePermission]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putPermission.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermission">QuicksightDataSourcePermission</a>]]

---

##### `put_ssl_properties` <a name="put_ssl_properties" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putSslProperties"></a>

```python
def put_ssl_properties(
  disable_ssl: typing.Union[bool, IResolvable]
) -> None
```

###### `disable_ssl`<sup>Required</sup> <a name="disable_ssl" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putSslProperties.parameter.disableSsl"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#disable_ssl QuicksightDataSource#disable_ssl}.

---

##### `put_vpc_connection_properties` <a name="put_vpc_connection_properties" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putVpcConnectionProperties"></a>

```python
def put_vpc_connection_properties(
  vpc_connection_arn: str
) -> None
```

###### `vpc_connection_arn`<sup>Required</sup> <a name="vpc_connection_arn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putVpcConnectionProperties.parameter.vpcConnectionArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#vpc_connection_arn QuicksightDataSource#vpc_connection_arn}.

---

##### `reset_aws_account_id` <a name="reset_aws_account_id" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetAwsAccountId"></a>

```python
def reset_aws_account_id() -> None
```

##### `reset_credentials` <a name="reset_credentials" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetCredentials"></a>

```python
def reset_credentials() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_permission` <a name="reset_permission" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetPermission"></a>

```python
def reset_permission() -> None
```

##### `reset_ssl_properties` <a name="reset_ssl_properties" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetSslProperties"></a>

```python
def reset_ssl_properties() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_vpc_connection_properties` <a name="reset_vpc_connection_properties" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetVpcConnectionProperties"></a>

```python
def reset_vpc_connection_properties() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_data_source

quicksightDataSource.QuicksightDataSource.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_data_source

quicksightDataSource.QuicksightDataSource.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_data_source

quicksightDataSource.QuicksightDataSource.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.credentials">credentials</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference">QuicksightDataSourceCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference">QuicksightDataSourceParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.permission">permission</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList">QuicksightDataSourcePermissionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.sslProperties">ssl_properties</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference">QuicksightDataSourceSslPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.vpcConnectionProperties">vpc_connection_properties</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference">QuicksightDataSourceVpcConnectionPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.awsAccountIdInput">aws_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.credentialsInput">credentials_input</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentials">QuicksightDataSourceCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.dataSourceIdInput">data_source_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.parametersInput">parameters_input</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters">QuicksightDataSourceParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.permissionInput">permission_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermission">QuicksightDataSourcePermission</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.sslPropertiesInput">ssl_properties_input</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslProperties">QuicksightDataSourceSslProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.vpcConnectionPropertiesInput">vpc_connection_properties_input</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionProperties">QuicksightDataSourceVpcConnectionProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.dataSourceId">data_source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.credentials"></a>

```python
credentials: QuicksightDataSourceCredentialsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference">QuicksightDataSourceCredentialsOutputReference</a>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.parameters"></a>

```python
parameters: QuicksightDataSourceParametersOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference">QuicksightDataSourceParametersOutputReference</a>

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.permission"></a>

```python
permission: QuicksightDataSourcePermissionList
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList">QuicksightDataSourcePermissionList</a>

---

##### `ssl_properties`<sup>Required</sup> <a name="ssl_properties" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.sslProperties"></a>

```python
ssl_properties: QuicksightDataSourceSslPropertiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference">QuicksightDataSourceSslPropertiesOutputReference</a>

---

##### `vpc_connection_properties`<sup>Required</sup> <a name="vpc_connection_properties" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.vpcConnectionProperties"></a>

```python
vpc_connection_properties: QuicksightDataSourceVpcConnectionPropertiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference">QuicksightDataSourceVpcConnectionPropertiesOutputReference</a>

---

##### `aws_account_id_input`<sup>Optional</sup> <a name="aws_account_id_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.awsAccountIdInput"></a>

```python
aws_account_id_input: str
```

- *Type:* str

---

##### `credentials_input`<sup>Optional</sup> <a name="credentials_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.credentialsInput"></a>

```python
credentials_input: QuicksightDataSourceCredentials
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentials">QuicksightDataSourceCredentials</a>

---

##### `data_source_id_input`<sup>Optional</sup> <a name="data_source_id_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.dataSourceIdInput"></a>

```python
data_source_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.parametersInput"></a>

```python
parameters_input: QuicksightDataSourceParameters
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters">QuicksightDataSourceParameters</a>

---

##### `permission_input`<sup>Optional</sup> <a name="permission_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.permissionInput"></a>

```python
permission_input: typing.Union[IResolvable, typing.List[QuicksightDataSourcePermission]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermission">QuicksightDataSourcePermission</a>]]

---

##### `ssl_properties_input`<sup>Optional</sup> <a name="ssl_properties_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.sslPropertiesInput"></a>

```python
ssl_properties_input: QuicksightDataSourceSslProperties
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslProperties">QuicksightDataSourceSslProperties</a>

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `vpc_connection_properties_input`<sup>Optional</sup> <a name="vpc_connection_properties_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.vpcConnectionPropertiesInput"></a>

```python
vpc_connection_properties_input: QuicksightDataSourceVpcConnectionProperties
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionProperties">QuicksightDataSourceVpcConnectionProperties</a>

---

##### `aws_account_id`<sup>Required</sup> <a name="aws_account_id" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

---

##### `data_source_id`<sup>Required</sup> <a name="data_source_id" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.dataSourceId"></a>

```python
data_source_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightDataSourceConfig <a name="QuicksightDataSourceConfig" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_data_source

quicksightDataSource.QuicksightDataSourceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_source_id: str,
  name: str,
  parameters: QuicksightDataSourceParameters,
  type: str,
  aws_account_id: str = None,
  credentials: QuicksightDataSourceCredentials = None,
  id: str = None,
  permission: typing.Union[IResolvable, typing.List[QuicksightDataSourcePermission]] = None,
  ssl_properties: QuicksightDataSourceSslProperties = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  vpc_connection_properties: QuicksightDataSourceVpcConnectionProperties = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.dataSourceId">data_source_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#data_source_id QuicksightDataSource#data_source_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#name QuicksightDataSource#name}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters">QuicksightDataSourceParameters</a></code> | parameters block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#type QuicksightDataSource#type}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#aws_account_id QuicksightDataSource#aws_account_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.credentials">credentials</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentials">QuicksightDataSourceCredentials</a></code> | credentials block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#id QuicksightDataSource#id}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.permission">permission</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermission">QuicksightDataSourcePermission</a>]]</code> | permission block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.sslProperties">ssl_properties</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslProperties">QuicksightDataSourceSslProperties</a></code> | ssl_properties block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#tags QuicksightDataSource#tags}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#tags_all QuicksightDataSource#tags_all}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.vpcConnectionProperties">vpc_connection_properties</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionProperties">QuicksightDataSourceVpcConnectionProperties</a></code> | vpc_connection_properties block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_source_id`<sup>Required</sup> <a name="data_source_id" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.dataSourceId"></a>

```python
data_source_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#data_source_id QuicksightDataSource#data_source_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#name QuicksightDataSource#name}.

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.parameters"></a>

```python
parameters: QuicksightDataSourceParameters
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters">QuicksightDataSourceParameters</a>

parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#parameters QuicksightDataSource#parameters}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#type QuicksightDataSource#type}.

---

##### `aws_account_id`<sup>Optional</sup> <a name="aws_account_id" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#aws_account_id QuicksightDataSource#aws_account_id}.

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.credentials"></a>

```python
credentials: QuicksightDataSourceCredentials
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentials">QuicksightDataSourceCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#credentials QuicksightDataSource#credentials}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#id QuicksightDataSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.permission"></a>

```python
permission: typing.Union[IResolvable, typing.List[QuicksightDataSourcePermission]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermission">QuicksightDataSourcePermission</a>]]

permission block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#permission QuicksightDataSource#permission}

---

##### `ssl_properties`<sup>Optional</sup> <a name="ssl_properties" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.sslProperties"></a>

```python
ssl_properties: QuicksightDataSourceSslProperties
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslProperties">QuicksightDataSourceSslProperties</a>

ssl_properties block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#ssl_properties QuicksightDataSource#ssl_properties}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#tags QuicksightDataSource#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#tags_all QuicksightDataSource#tags_all}.

---

##### `vpc_connection_properties`<sup>Optional</sup> <a name="vpc_connection_properties" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.vpcConnectionProperties"></a>

```python
vpc_connection_properties: QuicksightDataSourceVpcConnectionProperties
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionProperties">QuicksightDataSourceVpcConnectionProperties</a>

vpc_connection_properties block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#vpc_connection_properties QuicksightDataSource#vpc_connection_properties}

---

### QuicksightDataSourceCredentials <a name="QuicksightDataSourceCredentials" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentials.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_data_source

quicksightDataSource.QuicksightDataSourceCredentials(
  copy_source_arn: str = None,
  credential_pair: QuicksightDataSourceCredentialsCredentialPair = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentials.property.copySourceArn">copy_source_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#copy_source_arn QuicksightDataSource#copy_source_arn}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentials.property.credentialPair">credential_pair</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPair">QuicksightDataSourceCredentialsCredentialPair</a></code> | credential_pair block. |

---

##### `copy_source_arn`<sup>Optional</sup> <a name="copy_source_arn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentials.property.copySourceArn"></a>

```python
copy_source_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#copy_source_arn QuicksightDataSource#copy_source_arn}.

---

##### `credential_pair`<sup>Optional</sup> <a name="credential_pair" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentials.property.credentialPair"></a>

```python
credential_pair: QuicksightDataSourceCredentialsCredentialPair
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPair">QuicksightDataSourceCredentialsCredentialPair</a>

credential_pair block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#credential_pair QuicksightDataSource#credential_pair}

---

### QuicksightDataSourceCredentialsCredentialPair <a name="QuicksightDataSourceCredentialsCredentialPair" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPair"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPair.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_data_source

quicksightDataSource.QuicksightDataSourceCredentialsCredentialPair(
  password: str,
  username: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPair.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#password QuicksightDataSource#password}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPair.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#username QuicksightDataSource#username}. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPair.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#password QuicksightDataSource#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPair.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#username QuicksightDataSource#username}.

---

### QuicksightDataSourceParameters <a name="QuicksightDataSourceParameters" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_data_source

quicksightDataSource.QuicksightDataSourceParameters(
  amazon_elasticsearch: QuicksightDataSourceParametersAmazonElasticsearch = None,
  athena: QuicksightDataSourceParametersAthena = None,
  aurora: QuicksightDataSourceParametersAurora = None,
  aurora_postgresql: QuicksightDataSourceParametersAuroraPostgresql = None,
  aws_iot_analytics: QuicksightDataSourceParametersAwsIotAnalytics = None,
  jira: QuicksightDataSourceParametersJira = None,
  maria_db: QuicksightDataSourceParametersMariaDb = None,
  mysql: QuicksightDataSourceParametersMysql = None,
  oracle: QuicksightDataSourceParametersOracle = None,
  postgresql: QuicksightDataSourceParametersPostgresql = None,
  presto: QuicksightDataSourceParametersPresto = None,
  rds: QuicksightDataSourceParametersRds = None,
  redshift: QuicksightDataSourceParametersRedshift = None,
  s3: QuicksightDataSourceParametersS3 = None,
  service_now: QuicksightDataSourceParametersServiceNow = None,
  snowflake: QuicksightDataSourceParametersSnowflake = None,
  spark: QuicksightDataSourceParametersSpark = None,
  sql_server: QuicksightDataSourceParametersSqlServer = None,
  teradata: QuicksightDataSourceParametersTeradata = None,
  twitter: QuicksightDataSourceParametersTwitter = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.amazonElasticsearch">amazon_elasticsearch</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearch">QuicksightDataSourceParametersAmazonElasticsearch</a></code> | amazon_elasticsearch block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.athena">athena</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthena">QuicksightDataSourceParametersAthena</a></code> | athena block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.aurora">aurora</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAurora">QuicksightDataSourceParametersAurora</a></code> | aurora block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.auroraPostgresql">aurora_postgresql</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresql">QuicksightDataSourceParametersAuroraPostgresql</a></code> | aurora_postgresql block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.awsIotAnalytics">aws_iot_analytics</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalytics">QuicksightDataSourceParametersAwsIotAnalytics</a></code> | aws_iot_analytics block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.jira">jira</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJira">QuicksightDataSourceParametersJira</a></code> | jira block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.mariaDb">maria_db</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDb">QuicksightDataSourceParametersMariaDb</a></code> | maria_db block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.mysql">mysql</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysql">QuicksightDataSourceParametersMysql</a></code> | mysql block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.oracle">oracle</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracle">QuicksightDataSourceParametersOracle</a></code> | oracle block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.postgresql">postgresql</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresql">QuicksightDataSourceParametersPostgresql</a></code> | postgresql block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.presto">presto</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPresto">QuicksightDataSourceParametersPresto</a></code> | presto block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.rds">rds</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRds">QuicksightDataSourceParametersRds</a></code> | rds block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.redshift">redshift</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift">QuicksightDataSourceParametersRedshift</a></code> | redshift block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3">QuicksightDataSourceParametersS3</a></code> | s3 block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.serviceNow">service_now</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNow">QuicksightDataSourceParametersServiceNow</a></code> | service_now block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.snowflake">snowflake</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflake">QuicksightDataSourceParametersSnowflake</a></code> | snowflake block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.spark">spark</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSpark">QuicksightDataSourceParametersSpark</a></code> | spark block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.sqlServer">sql_server</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServer">QuicksightDataSourceParametersSqlServer</a></code> | sql_server block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.teradata">teradata</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradata">QuicksightDataSourceParametersTeradata</a></code> | teradata block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.twitter">twitter</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitter">QuicksightDataSourceParametersTwitter</a></code> | twitter block. |

---

##### `amazon_elasticsearch`<sup>Optional</sup> <a name="amazon_elasticsearch" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.amazonElasticsearch"></a>

```python
amazon_elasticsearch: QuicksightDataSourceParametersAmazonElasticsearch
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearch">QuicksightDataSourceParametersAmazonElasticsearch</a>

amazon_elasticsearch block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#amazon_elasticsearch QuicksightDataSource#amazon_elasticsearch}

---

##### `athena`<sup>Optional</sup> <a name="athena" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.athena"></a>

```python
athena: QuicksightDataSourceParametersAthena
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthena">QuicksightDataSourceParametersAthena</a>

athena block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#athena QuicksightDataSource#athena}

---

##### `aurora`<sup>Optional</sup> <a name="aurora" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.aurora"></a>

```python
aurora: QuicksightDataSourceParametersAurora
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAurora">QuicksightDataSourceParametersAurora</a>

aurora block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#aurora QuicksightDataSource#aurora}

---

##### `aurora_postgresql`<sup>Optional</sup> <a name="aurora_postgresql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.auroraPostgresql"></a>

```python
aurora_postgresql: QuicksightDataSourceParametersAuroraPostgresql
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresql">QuicksightDataSourceParametersAuroraPostgresql</a>

aurora_postgresql block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#aurora_postgresql QuicksightDataSource#aurora_postgresql}

---

##### `aws_iot_analytics`<sup>Optional</sup> <a name="aws_iot_analytics" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.awsIotAnalytics"></a>

```python
aws_iot_analytics: QuicksightDataSourceParametersAwsIotAnalytics
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalytics">QuicksightDataSourceParametersAwsIotAnalytics</a>

aws_iot_analytics block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#aws_iot_analytics QuicksightDataSource#aws_iot_analytics}

---

##### `jira`<sup>Optional</sup> <a name="jira" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.jira"></a>

```python
jira: QuicksightDataSourceParametersJira
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJira">QuicksightDataSourceParametersJira</a>

jira block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#jira QuicksightDataSource#jira}

---

##### `maria_db`<sup>Optional</sup> <a name="maria_db" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.mariaDb"></a>

```python
maria_db: QuicksightDataSourceParametersMariaDb
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDb">QuicksightDataSourceParametersMariaDb</a>

maria_db block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#maria_db QuicksightDataSource#maria_db}

---

##### `mysql`<sup>Optional</sup> <a name="mysql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.mysql"></a>

```python
mysql: QuicksightDataSourceParametersMysql
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysql">QuicksightDataSourceParametersMysql</a>

mysql block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#mysql QuicksightDataSource#mysql}

---

##### `oracle`<sup>Optional</sup> <a name="oracle" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.oracle"></a>

```python
oracle: QuicksightDataSourceParametersOracle
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracle">QuicksightDataSourceParametersOracle</a>

oracle block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#oracle QuicksightDataSource#oracle}

---

##### `postgresql`<sup>Optional</sup> <a name="postgresql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.postgresql"></a>

```python
postgresql: QuicksightDataSourceParametersPostgresql
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresql">QuicksightDataSourceParametersPostgresql</a>

postgresql block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#postgresql QuicksightDataSource#postgresql}

---

##### `presto`<sup>Optional</sup> <a name="presto" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.presto"></a>

```python
presto: QuicksightDataSourceParametersPresto
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPresto">QuicksightDataSourceParametersPresto</a>

presto block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#presto QuicksightDataSource#presto}

---

##### `rds`<sup>Optional</sup> <a name="rds" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.rds"></a>

```python
rds: QuicksightDataSourceParametersRds
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRds">QuicksightDataSourceParametersRds</a>

rds block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#rds QuicksightDataSource#rds}

---

##### `redshift`<sup>Optional</sup> <a name="redshift" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.redshift"></a>

```python
redshift: QuicksightDataSourceParametersRedshift
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift">QuicksightDataSourceParametersRedshift</a>

redshift block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#redshift QuicksightDataSource#redshift}

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.s3"></a>

```python
s3: QuicksightDataSourceParametersS3
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3">QuicksightDataSourceParametersS3</a>

s3 block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#s3 QuicksightDataSource#s3}

---

##### `service_now`<sup>Optional</sup> <a name="service_now" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.serviceNow"></a>

```python
service_now: QuicksightDataSourceParametersServiceNow
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNow">QuicksightDataSourceParametersServiceNow</a>

service_now block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#service_now QuicksightDataSource#service_now}

---

##### `snowflake`<sup>Optional</sup> <a name="snowflake" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.snowflake"></a>

```python
snowflake: QuicksightDataSourceParametersSnowflake
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflake">QuicksightDataSourceParametersSnowflake</a>

snowflake block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#snowflake QuicksightDataSource#snowflake}

---

##### `spark`<sup>Optional</sup> <a name="spark" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.spark"></a>

```python
spark: QuicksightDataSourceParametersSpark
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSpark">QuicksightDataSourceParametersSpark</a>

spark block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#spark QuicksightDataSource#spark}

---

##### `sql_server`<sup>Optional</sup> <a name="sql_server" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.sqlServer"></a>

```python
sql_server: QuicksightDataSourceParametersSqlServer
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServer">QuicksightDataSourceParametersSqlServer</a>

sql_server block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#sql_server QuicksightDataSource#sql_server}

---

##### `teradata`<sup>Optional</sup> <a name="teradata" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.teradata"></a>

```python
teradata: QuicksightDataSourceParametersTeradata
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradata">QuicksightDataSourceParametersTeradata</a>

teradata block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#teradata QuicksightDataSource#teradata}

---

##### `twitter`<sup>Optional</sup> <a name="twitter" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.twitter"></a>

```python
twitter: QuicksightDataSourceParametersTwitter
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitter">QuicksightDataSourceParametersTwitter</a>

twitter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#twitter QuicksightDataSource#twitter}

---

### QuicksightDataSourceParametersAmazonElasticsearch <a name="QuicksightDataSourceParametersAmazonElasticsearch" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearch.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_data_source

quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearch(
  domain: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearch.property.domain">domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#domain QuicksightDataSource#domain}. |

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearch.property.domain"></a>

```python
domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#domain QuicksightDataSource#domain}.

---

### QuicksightDataSourceParametersAthena <a name="QuicksightDataSourceParametersAthena" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthena"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthena.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_data_source

quicksightDataSource.QuicksightDataSourceParametersAthena(
  work_group: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthena.property.workGroup">work_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#work_group QuicksightDataSource#work_group}. |

---

##### `work_group`<sup>Optional</sup> <a name="work_group" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthena.property.workGroup"></a>

```python
work_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#work_group QuicksightDataSource#work_group}.

---

### QuicksightDataSourceParametersAurora <a name="QuicksightDataSourceParametersAurora" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAurora"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAurora.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_data_source

quicksightDataSource.QuicksightDataSourceParametersAurora(
  database: str,
  host: str,
  port: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAurora.property.database">database</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAurora.property.host">host</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAurora.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAurora.property.database"></a>

```python
database: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}.

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAurora.property.host"></a>

```python
host: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAurora.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}.

---

### QuicksightDataSourceParametersAuroraPostgresql <a name="QuicksightDataSourceParametersAuroraPostgresql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresql.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_data_source

quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresql(
  database: str,
  host: str,
  port: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresql.property.database">database</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresql.property.host">host</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresql.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresql.property.database"></a>

```python
database: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}.

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresql.property.host"></a>

```python
host: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresql.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}.

---

### QuicksightDataSourceParametersAwsIotAnalytics <a name="QuicksightDataSourceParametersAwsIotAnalytics" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalytics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalytics.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_data_source

quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalytics(
  data_set_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalytics.property.dataSetName">data_set_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#data_set_name QuicksightDataSource#data_set_name}. |

---

##### `data_set_name`<sup>Required</sup> <a name="data_set_name" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalytics.property.dataSetName"></a>

```python
data_set_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#data_set_name QuicksightDataSource#data_set_name}.

---

### QuicksightDataSourceParametersJira <a name="QuicksightDataSourceParametersJira" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJira"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJira.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_data_source

quicksightDataSource.QuicksightDataSourceParametersJira(
  site_base_url: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJira.property.siteBaseUrl">site_base_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#site_base_url QuicksightDataSource#site_base_url}. |

---

##### `site_base_url`<sup>Required</sup> <a name="site_base_url" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJira.property.siteBaseUrl"></a>

```python
site_base_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#site_base_url QuicksightDataSource#site_base_url}.

---

### QuicksightDataSourceParametersMariaDb <a name="QuicksightDataSourceParametersMariaDb" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDb.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_data_source

quicksightDataSource.QuicksightDataSourceParametersMariaDb(
  database: str,
  host: str,
  port: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDb.property.database">database</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDb.property.host">host</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDb.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDb.property.database"></a>

```python
database: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}.

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDb.property.host"></a>

```python
host: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDb.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}.

---

### QuicksightDataSourceParametersMysql <a name="QuicksightDataSourceParametersMysql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysql.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_data_source

quicksightDataSource.QuicksightDataSourceParametersMysql(
  database: str,
  host: str,
  port: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysql.property.database">database</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysql.property.host">host</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysql.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysql.property.database"></a>

```python
database: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}.

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysql.property.host"></a>

```python
host: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysql.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}.

---

### QuicksightDataSourceParametersOracle <a name="QuicksightDataSourceParametersOracle" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracle.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_data_source

quicksightDataSource.QuicksightDataSourceParametersOracle(
  database: str,
  host: str,
  port: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracle.property.database">database</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracle.property.host">host</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracle.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracle.property.database"></a>

```python
database: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}.

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracle.property.host"></a>

```python
host: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracle.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}.

---

### QuicksightDataSourceParametersPostgresql <a name="QuicksightDataSourceParametersPostgresql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresql.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_data_source

quicksightDataSource.QuicksightDataSourceParametersPostgresql(
  database: str,
  host: str,
  port: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresql.property.database">database</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresql.property.host">host</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresql.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresql.property.database"></a>

```python
database: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}.

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresql.property.host"></a>

```python
host: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresql.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}.

---

### QuicksightDataSourceParametersPresto <a name="QuicksightDataSourceParametersPresto" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPresto"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPresto.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_data_source

quicksightDataSource.QuicksightDataSourceParametersPresto(
  catalog: str,
  host: str,
  port: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPresto.property.catalog">catalog</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#catalog QuicksightDataSource#catalog}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPresto.property.host">host</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPresto.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}. |

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPresto.property.catalog"></a>

```python
catalog: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#catalog QuicksightDataSource#catalog}.

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPresto.property.host"></a>

```python
host: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPresto.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}.

---

### QuicksightDataSourceParametersRds <a name="QuicksightDataSourceParametersRds" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRds.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_data_source

quicksightDataSource.QuicksightDataSourceParametersRds(
  database: str,
  instance_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRds.property.database">database</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRds.property.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#instance_id QuicksightDataSource#instance_id}. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRds.property.database"></a>

```python
database: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}.

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRds.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#instance_id QuicksightDataSource#instance_id}.

---

### QuicksightDataSourceParametersRedshift <a name="QuicksightDataSourceParametersRedshift" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_data_source

quicksightDataSource.QuicksightDataSourceParametersRedshift(
  database: str,
  cluster_id: str = None,
  host: str = None,
  port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift.property.database">database</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift.property.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#cluster_id QuicksightDataSource#cluster_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift.property.host">host</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift.property.database"></a>

```python
database: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}.

---

##### `cluster_id`<sup>Optional</sup> <a name="cluster_id" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#cluster_id QuicksightDataSource#cluster_id}.

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift.property.host"></a>

```python
host: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}.

---

### QuicksightDataSourceParametersS3 <a name="QuicksightDataSourceParametersS3" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_data_source

quicksightDataSource.QuicksightDataSourceParametersS3(
  manifest_file_location: QuicksightDataSourceParametersS3ManifestFileLocation
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3.property.manifestFileLocation">manifest_file_location</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocation">QuicksightDataSourceParametersS3ManifestFileLocation</a></code> | manifest_file_location block. |

---

##### `manifest_file_location`<sup>Required</sup> <a name="manifest_file_location" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3.property.manifestFileLocation"></a>

```python
manifest_file_location: QuicksightDataSourceParametersS3ManifestFileLocation
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocation">QuicksightDataSourceParametersS3ManifestFileLocation</a>

manifest_file_location block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#manifest_file_location QuicksightDataSource#manifest_file_location}

---

### QuicksightDataSourceParametersS3ManifestFileLocation <a name="QuicksightDataSourceParametersS3ManifestFileLocation" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_data_source

quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocation(
  bucket: str,
  key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocation.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#bucket QuicksightDataSource#bucket}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocation.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#key QuicksightDataSource#key}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocation.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#bucket QuicksightDataSource#bucket}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocation.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#key QuicksightDataSource#key}.

---

### QuicksightDataSourceParametersServiceNow <a name="QuicksightDataSourceParametersServiceNow" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNow.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_data_source

quicksightDataSource.QuicksightDataSourceParametersServiceNow(
  site_base_url: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNow.property.siteBaseUrl">site_base_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#site_base_url QuicksightDataSource#site_base_url}. |

---

##### `site_base_url`<sup>Required</sup> <a name="site_base_url" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNow.property.siteBaseUrl"></a>

```python
site_base_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#site_base_url QuicksightDataSource#site_base_url}.

---

### QuicksightDataSourceParametersSnowflake <a name="QuicksightDataSourceParametersSnowflake" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflake"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflake.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_data_source

quicksightDataSource.QuicksightDataSourceParametersSnowflake(
  database: str,
  host: str,
  warehouse: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflake.property.database">database</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflake.property.host">host</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflake.property.warehouse">warehouse</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#warehouse QuicksightDataSource#warehouse}. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflake.property.database"></a>

```python
database: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}.

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflake.property.host"></a>

```python
host: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}.

---

##### `warehouse`<sup>Required</sup> <a name="warehouse" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflake.property.warehouse"></a>

```python
warehouse: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#warehouse QuicksightDataSource#warehouse}.

---

### QuicksightDataSourceParametersSpark <a name="QuicksightDataSourceParametersSpark" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSpark"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSpark.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_data_source

quicksightDataSource.QuicksightDataSourceParametersSpark(
  host: str,
  port: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSpark.property.host">host</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSpark.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}. |

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSpark.property.host"></a>

```python
host: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSpark.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}.

---

### QuicksightDataSourceParametersSqlServer <a name="QuicksightDataSourceParametersSqlServer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServer.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_data_source

quicksightDataSource.QuicksightDataSourceParametersSqlServer(
  database: str,
  host: str,
  port: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServer.property.database">database</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServer.property.host">host</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServer.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServer.property.database"></a>

```python
database: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}.

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServer.property.host"></a>

```python
host: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServer.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}.

---

### QuicksightDataSourceParametersTeradata <a name="QuicksightDataSourceParametersTeradata" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradata.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_data_source

quicksightDataSource.QuicksightDataSourceParametersTeradata(
  database: str,
  host: str,
  port: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradata.property.database">database</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradata.property.host">host</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradata.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradata.property.database"></a>

```python
database: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}.

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradata.property.host"></a>

```python
host: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradata.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}.

---

### QuicksightDataSourceParametersTwitter <a name="QuicksightDataSourceParametersTwitter" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_data_source

quicksightDataSource.QuicksightDataSourceParametersTwitter(
  max_rows: typing.Union[int, float],
  query: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitter.property.maxRows">max_rows</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#max_rows QuicksightDataSource#max_rows}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitter.property.query">query</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#query QuicksightDataSource#query}. |

---

##### `max_rows`<sup>Required</sup> <a name="max_rows" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitter.property.maxRows"></a>

```python
max_rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#max_rows QuicksightDataSource#max_rows}.

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitter.property.query"></a>

```python
query: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#query QuicksightDataSource#query}.

---

### QuicksightDataSourcePermission <a name="QuicksightDataSourcePermission" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermission"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermission.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_data_source

quicksightDataSource.QuicksightDataSourcePermission(
  actions: typing.List[str],
  principal: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermission.property.actions">actions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#actions QuicksightDataSource#actions}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermission.property.principal">principal</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#principal QuicksightDataSource#principal}. |

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermission.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#actions QuicksightDataSource#actions}.

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermission.property.principal"></a>

```python
principal: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#principal QuicksightDataSource#principal}.

---

### QuicksightDataSourceSslProperties <a name="QuicksightDataSourceSslProperties" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslProperties.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_data_source

quicksightDataSource.QuicksightDataSourceSslProperties(
  disable_ssl: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslProperties.property.disableSsl">disable_ssl</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#disable_ssl QuicksightDataSource#disable_ssl}. |

---

##### `disable_ssl`<sup>Required</sup> <a name="disable_ssl" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslProperties.property.disableSsl"></a>

```python
disable_ssl: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#disable_ssl QuicksightDataSource#disable_ssl}.

---

### QuicksightDataSourceVpcConnectionProperties <a name="QuicksightDataSourceVpcConnectionProperties" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionProperties.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_data_source

quicksightDataSource.QuicksightDataSourceVpcConnectionProperties(
  vpc_connection_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionProperties.property.vpcConnectionArn">vpc_connection_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#vpc_connection_arn QuicksightDataSource#vpc_connection_arn}. |

---

##### `vpc_connection_arn`<sup>Required</sup> <a name="vpc_connection_arn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionProperties.property.vpcConnectionArn"></a>

```python
vpc_connection_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#vpc_connection_arn QuicksightDataSource#vpc_connection_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightDataSourceCredentialsCredentialPairOutputReference <a name="QuicksightDataSourceCredentialsCredentialPairOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_data_source

quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPair">QuicksightDataSourceCredentialsCredentialPair</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightDataSourceCredentialsCredentialPair
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPair">QuicksightDataSourceCredentialsCredentialPair</a>

---


### QuicksightDataSourceCredentialsOutputReference <a name="QuicksightDataSourceCredentialsOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_data_source

quicksightDataSource.QuicksightDataSourceCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.putCredentialPair">put_credential_pair</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.resetCopySourceArn">reset_copy_source_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.resetCredentialPair">reset_credential_pair</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_credential_pair` <a name="put_credential_pair" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.putCredentialPair"></a>

```python
def put_credential_pair(
  password: str,
  username: str
) -> None
```

###### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.putCredentialPair.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#password QuicksightDataSource#password}.

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.putCredentialPair.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#username QuicksightDataSource#username}.

---

##### `reset_copy_source_arn` <a name="reset_copy_source_arn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.resetCopySourceArn"></a>

```python
def reset_copy_source_arn() -> None
```

##### `reset_credential_pair` <a name="reset_credential_pair" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.resetCredentialPair"></a>

```python
def reset_credential_pair() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.property.credentialPair">credential_pair</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference">QuicksightDataSourceCredentialsCredentialPairOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.property.copySourceArnInput">copy_source_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.property.credentialPairInput">credential_pair_input</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPair">QuicksightDataSourceCredentialsCredentialPair</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.property.copySourceArn">copy_source_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentials">QuicksightDataSourceCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `credential_pair`<sup>Required</sup> <a name="credential_pair" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.property.credentialPair"></a>

```python
credential_pair: QuicksightDataSourceCredentialsCredentialPairOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference">QuicksightDataSourceCredentialsCredentialPairOutputReference</a>

---

##### `copy_source_arn_input`<sup>Optional</sup> <a name="copy_source_arn_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.property.copySourceArnInput"></a>

```python
copy_source_arn_input: str
```

- *Type:* str

---

##### `credential_pair_input`<sup>Optional</sup> <a name="credential_pair_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.property.credentialPairInput"></a>

```python
credential_pair_input: QuicksightDataSourceCredentialsCredentialPair
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPair">QuicksightDataSourceCredentialsCredentialPair</a>

---

##### `copy_source_arn`<sup>Required</sup> <a name="copy_source_arn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.property.copySourceArn"></a>

```python
copy_source_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightDataSourceCredentials
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentials">QuicksightDataSourceCredentials</a>

---


### QuicksightDataSourceParametersAmazonElasticsearchOutputReference <a name="QuicksightDataSourceParametersAmazonElasticsearchOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_data_source

quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearch">QuicksightDataSourceParametersAmazonElasticsearch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightDataSourceParametersAmazonElasticsearch
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearch">QuicksightDataSourceParametersAmazonElasticsearch</a>

---


### QuicksightDataSourceParametersAthenaOutputReference <a name="QuicksightDataSourceParametersAthenaOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_data_source

quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.resetWorkGroup">reset_work_group</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_work_group` <a name="reset_work_group" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.resetWorkGroup"></a>

```python
def reset_work_group() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.property.workGroupInput">work_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.property.workGroup">work_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthena">QuicksightDataSourceParametersAthena</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `work_group_input`<sup>Optional</sup> <a name="work_group_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.property.workGroupInput"></a>

```python
work_group_input: str
```

- *Type:* str

---

##### `work_group`<sup>Required</sup> <a name="work_group" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.property.workGroup"></a>

```python
work_group: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightDataSourceParametersAthena
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthena">QuicksightDataSourceParametersAthena</a>

---


### QuicksightDataSourceParametersAuroraOutputReference <a name="QuicksightDataSourceParametersAuroraOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_data_source

quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAurora">QuicksightDataSourceParametersAurora</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightDataSourceParametersAurora
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAurora">QuicksightDataSourceParametersAurora</a>

---


### QuicksightDataSourceParametersAuroraPostgresqlOutputReference <a name="QuicksightDataSourceParametersAuroraPostgresqlOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_data_source

quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresql">QuicksightDataSourceParametersAuroraPostgresql</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightDataSourceParametersAuroraPostgresql
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresql">QuicksightDataSourceParametersAuroraPostgresql</a>

---


### QuicksightDataSourceParametersAwsIotAnalyticsOutputReference <a name="QuicksightDataSourceParametersAwsIotAnalyticsOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_data_source

quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.property.dataSetNameInput">data_set_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.property.dataSetName">data_set_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalytics">QuicksightDataSourceParametersAwsIotAnalytics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_set_name_input`<sup>Optional</sup> <a name="data_set_name_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.property.dataSetNameInput"></a>

```python
data_set_name_input: str
```

- *Type:* str

---

##### `data_set_name`<sup>Required</sup> <a name="data_set_name" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.property.dataSetName"></a>

```python
data_set_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightDataSourceParametersAwsIotAnalytics
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalytics">QuicksightDataSourceParametersAwsIotAnalytics</a>

---


### QuicksightDataSourceParametersJiraOutputReference <a name="QuicksightDataSourceParametersJiraOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_data_source

quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.property.siteBaseUrlInput">site_base_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.property.siteBaseUrl">site_base_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJira">QuicksightDataSourceParametersJira</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `site_base_url_input`<sup>Optional</sup> <a name="site_base_url_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.property.siteBaseUrlInput"></a>

```python
site_base_url_input: str
```

- *Type:* str

---

##### `site_base_url`<sup>Required</sup> <a name="site_base_url" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.property.siteBaseUrl"></a>

```python
site_base_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightDataSourceParametersJira
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJira">QuicksightDataSourceParametersJira</a>

---


### QuicksightDataSourceParametersMariaDbOutputReference <a name="QuicksightDataSourceParametersMariaDbOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_data_source

quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDb">QuicksightDataSourceParametersMariaDb</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightDataSourceParametersMariaDb
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDb">QuicksightDataSourceParametersMariaDb</a>

---


### QuicksightDataSourceParametersMysqlOutputReference <a name="QuicksightDataSourceParametersMysqlOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_data_source

quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysql">QuicksightDataSourceParametersMysql</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightDataSourceParametersMysql
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysql">QuicksightDataSourceParametersMysql</a>

---


### QuicksightDataSourceParametersOracleOutputReference <a name="QuicksightDataSourceParametersOracleOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_data_source

quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracle">QuicksightDataSourceParametersOracle</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightDataSourceParametersOracle
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracle">QuicksightDataSourceParametersOracle</a>

---


### QuicksightDataSourceParametersOutputReference <a name="QuicksightDataSourceParametersOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_data_source

quicksightDataSource.QuicksightDataSourceParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAmazonElasticsearch">put_amazon_elasticsearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAthena">put_athena</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAurora">put_aurora</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAuroraPostgresql">put_aurora_postgresql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAwsIotAnalytics">put_aws_iot_analytics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putJira">put_jira</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putMariaDb">put_maria_db</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putMysql">put_mysql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putOracle">put_oracle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putPostgresql">put_postgresql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putPresto">put_presto</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putRds">put_rds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putRedshift">put_redshift</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putS3">put_s3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putServiceNow">put_service_now</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putSnowflake">put_snowflake</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putSpark">put_spark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putSqlServer">put_sql_server</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putTeradata">put_teradata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putTwitter">put_twitter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetAmazonElasticsearch">reset_amazon_elasticsearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetAthena">reset_athena</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetAurora">reset_aurora</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetAuroraPostgresql">reset_aurora_postgresql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetAwsIotAnalytics">reset_aws_iot_analytics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetJira">reset_jira</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetMariaDb">reset_maria_db</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetMysql">reset_mysql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetOracle">reset_oracle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetPostgresql">reset_postgresql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetPresto">reset_presto</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetRds">reset_rds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetRedshift">reset_redshift</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetS3">reset_s3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetServiceNow">reset_service_now</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetSnowflake">reset_snowflake</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetSpark">reset_spark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetSqlServer">reset_sql_server</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetTeradata">reset_teradata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetTwitter">reset_twitter</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_amazon_elasticsearch` <a name="put_amazon_elasticsearch" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAmazonElasticsearch"></a>

```python
def put_amazon_elasticsearch(
  domain: str
) -> None
```

###### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAmazonElasticsearch.parameter.domain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#domain QuicksightDataSource#domain}.

---

##### `put_athena` <a name="put_athena" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAthena"></a>

```python
def put_athena(
  work_group: str = None
) -> None
```

###### `work_group`<sup>Optional</sup> <a name="work_group" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAthena.parameter.workGroup"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#work_group QuicksightDataSource#work_group}.

---

##### `put_aurora` <a name="put_aurora" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAurora"></a>

```python
def put_aurora(
  database: str,
  host: str,
  port: typing.Union[int, float]
) -> None
```

###### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAurora.parameter.database"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}.

---

###### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAurora.parameter.host"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}.

---

###### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAurora.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}.

---

##### `put_aurora_postgresql` <a name="put_aurora_postgresql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAuroraPostgresql"></a>

```python
def put_aurora_postgresql(
  database: str,
  host: str,
  port: typing.Union[int, float]
) -> None
```

###### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAuroraPostgresql.parameter.database"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}.

---

###### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAuroraPostgresql.parameter.host"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}.

---

###### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAuroraPostgresql.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}.

---

##### `put_aws_iot_analytics` <a name="put_aws_iot_analytics" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAwsIotAnalytics"></a>

```python
def put_aws_iot_analytics(
  data_set_name: str
) -> None
```

###### `data_set_name`<sup>Required</sup> <a name="data_set_name" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAwsIotAnalytics.parameter.dataSetName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#data_set_name QuicksightDataSource#data_set_name}.

---

##### `put_jira` <a name="put_jira" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putJira"></a>

```python
def put_jira(
  site_base_url: str
) -> None
```

###### `site_base_url`<sup>Required</sup> <a name="site_base_url" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putJira.parameter.siteBaseUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#site_base_url QuicksightDataSource#site_base_url}.

---

##### `put_maria_db` <a name="put_maria_db" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putMariaDb"></a>

```python
def put_maria_db(
  database: str,
  host: str,
  port: typing.Union[int, float]
) -> None
```

###### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putMariaDb.parameter.database"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}.

---

###### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putMariaDb.parameter.host"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}.

---

###### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putMariaDb.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}.

---

##### `put_mysql` <a name="put_mysql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putMysql"></a>

```python
def put_mysql(
  database: str,
  host: str,
  port: typing.Union[int, float]
) -> None
```

###### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putMysql.parameter.database"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}.

---

###### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putMysql.parameter.host"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}.

---

###### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putMysql.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}.

---

##### `put_oracle` <a name="put_oracle" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putOracle"></a>

```python
def put_oracle(
  database: str,
  host: str,
  port: typing.Union[int, float]
) -> None
```

###### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putOracle.parameter.database"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}.

---

###### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putOracle.parameter.host"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}.

---

###### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putOracle.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}.

---

##### `put_postgresql` <a name="put_postgresql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putPostgresql"></a>

```python
def put_postgresql(
  database: str,
  host: str,
  port: typing.Union[int, float]
) -> None
```

###### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putPostgresql.parameter.database"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}.

---

###### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putPostgresql.parameter.host"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}.

---

###### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putPostgresql.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}.

---

##### `put_presto` <a name="put_presto" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putPresto"></a>

```python
def put_presto(
  catalog: str,
  host: str,
  port: typing.Union[int, float]
) -> None
```

###### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putPresto.parameter.catalog"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#catalog QuicksightDataSource#catalog}.

---

###### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putPresto.parameter.host"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}.

---

###### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putPresto.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}.

---

##### `put_rds` <a name="put_rds" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putRds"></a>

```python
def put_rds(
  database: str,
  instance_id: str
) -> None
```

###### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putRds.parameter.database"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}.

---

###### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putRds.parameter.instanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#instance_id QuicksightDataSource#instance_id}.

---

##### `put_redshift` <a name="put_redshift" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putRedshift"></a>

```python
def put_redshift(
  database: str,
  cluster_id: str = None,
  host: str = None,
  port: typing.Union[int, float] = None
) -> None
```

###### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putRedshift.parameter.database"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}.

---

###### `cluster_id`<sup>Optional</sup> <a name="cluster_id" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putRedshift.parameter.clusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#cluster_id QuicksightDataSource#cluster_id}.

---

###### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putRedshift.parameter.host"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}.

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putRedshift.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}.

---

##### `put_s3` <a name="put_s3" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putS3"></a>

```python
def put_s3(
  manifest_file_location: QuicksightDataSourceParametersS3ManifestFileLocation
) -> None
```

###### `manifest_file_location`<sup>Required</sup> <a name="manifest_file_location" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putS3.parameter.manifestFileLocation"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocation">QuicksightDataSourceParametersS3ManifestFileLocation</a>

manifest_file_location block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#manifest_file_location QuicksightDataSource#manifest_file_location}

---

##### `put_service_now` <a name="put_service_now" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putServiceNow"></a>

```python
def put_service_now(
  site_base_url: str
) -> None
```

###### `site_base_url`<sup>Required</sup> <a name="site_base_url" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putServiceNow.parameter.siteBaseUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#site_base_url QuicksightDataSource#site_base_url}.

---

##### `put_snowflake` <a name="put_snowflake" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putSnowflake"></a>

```python
def put_snowflake(
  database: str,
  host: str,
  warehouse: str
) -> None
```

###### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putSnowflake.parameter.database"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}.

---

###### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putSnowflake.parameter.host"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}.

---

###### `warehouse`<sup>Required</sup> <a name="warehouse" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putSnowflake.parameter.warehouse"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#warehouse QuicksightDataSource#warehouse}.

---

##### `put_spark` <a name="put_spark" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putSpark"></a>

```python
def put_spark(
  host: str,
  port: typing.Union[int, float]
) -> None
```

###### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putSpark.parameter.host"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}.

---

###### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putSpark.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}.

---

##### `put_sql_server` <a name="put_sql_server" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putSqlServer"></a>

```python
def put_sql_server(
  database: str,
  host: str,
  port: typing.Union[int, float]
) -> None
```

###### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putSqlServer.parameter.database"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}.

---

###### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putSqlServer.parameter.host"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}.

---

###### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putSqlServer.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}.

---

##### `put_teradata` <a name="put_teradata" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putTeradata"></a>

```python
def put_teradata(
  database: str,
  host: str,
  port: typing.Union[int, float]
) -> None
```

###### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putTeradata.parameter.database"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}.

---

###### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putTeradata.parameter.host"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}.

---

###### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putTeradata.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}.

---

##### `put_twitter` <a name="put_twitter" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putTwitter"></a>

```python
def put_twitter(
  max_rows: typing.Union[int, float],
  query: str
) -> None
```

###### `max_rows`<sup>Required</sup> <a name="max_rows" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putTwitter.parameter.maxRows"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#max_rows QuicksightDataSource#max_rows}.

---

###### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putTwitter.parameter.query"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#query QuicksightDataSource#query}.

---

##### `reset_amazon_elasticsearch` <a name="reset_amazon_elasticsearch" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetAmazonElasticsearch"></a>

```python
def reset_amazon_elasticsearch() -> None
```

##### `reset_athena` <a name="reset_athena" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetAthena"></a>

```python
def reset_athena() -> None
```

##### `reset_aurora` <a name="reset_aurora" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetAurora"></a>

```python
def reset_aurora() -> None
```

##### `reset_aurora_postgresql` <a name="reset_aurora_postgresql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetAuroraPostgresql"></a>

```python
def reset_aurora_postgresql() -> None
```

##### `reset_aws_iot_analytics` <a name="reset_aws_iot_analytics" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetAwsIotAnalytics"></a>

```python
def reset_aws_iot_analytics() -> None
```

##### `reset_jira` <a name="reset_jira" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetJira"></a>

```python
def reset_jira() -> None
```

##### `reset_maria_db` <a name="reset_maria_db" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetMariaDb"></a>

```python
def reset_maria_db() -> None
```

##### `reset_mysql` <a name="reset_mysql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetMysql"></a>

```python
def reset_mysql() -> None
```

##### `reset_oracle` <a name="reset_oracle" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetOracle"></a>

```python
def reset_oracle() -> None
```

##### `reset_postgresql` <a name="reset_postgresql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetPostgresql"></a>

```python
def reset_postgresql() -> None
```

##### `reset_presto` <a name="reset_presto" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetPresto"></a>

```python
def reset_presto() -> None
```

##### `reset_rds` <a name="reset_rds" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetRds"></a>

```python
def reset_rds() -> None
```

##### `reset_redshift` <a name="reset_redshift" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetRedshift"></a>

```python
def reset_redshift() -> None
```

##### `reset_s3` <a name="reset_s3" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetS3"></a>

```python
def reset_s3() -> None
```

##### `reset_service_now` <a name="reset_service_now" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetServiceNow"></a>

```python
def reset_service_now() -> None
```

##### `reset_snowflake` <a name="reset_snowflake" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetSnowflake"></a>

```python
def reset_snowflake() -> None
```

##### `reset_spark` <a name="reset_spark" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetSpark"></a>

```python
def reset_spark() -> None
```

##### `reset_sql_server` <a name="reset_sql_server" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetSqlServer"></a>

```python
def reset_sql_server() -> None
```

##### `reset_teradata` <a name="reset_teradata" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetTeradata"></a>

```python
def reset_teradata() -> None
```

##### `reset_twitter` <a name="reset_twitter" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetTwitter"></a>

```python
def reset_twitter() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.amazonElasticsearch">amazon_elasticsearch</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference">QuicksightDataSourceParametersAmazonElasticsearchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.athena">athena</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference">QuicksightDataSourceParametersAthenaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.aurora">aurora</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference">QuicksightDataSourceParametersAuroraOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.auroraPostgresql">aurora_postgresql</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference">QuicksightDataSourceParametersAuroraPostgresqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.awsIotAnalytics">aws_iot_analytics</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference">QuicksightDataSourceParametersAwsIotAnalyticsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.jira">jira</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference">QuicksightDataSourceParametersJiraOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.mariaDb">maria_db</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference">QuicksightDataSourceParametersMariaDbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.mysql">mysql</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference">QuicksightDataSourceParametersMysqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.oracle">oracle</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference">QuicksightDataSourceParametersOracleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.postgresql">postgresql</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference">QuicksightDataSourceParametersPostgresqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.presto">presto</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference">QuicksightDataSourceParametersPrestoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.rds">rds</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference">QuicksightDataSourceParametersRdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.redshift">redshift</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference">QuicksightDataSourceParametersRedshiftOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference">QuicksightDataSourceParametersS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.serviceNow">service_now</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference">QuicksightDataSourceParametersServiceNowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.snowflake">snowflake</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference">QuicksightDataSourceParametersSnowflakeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.spark">spark</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference">QuicksightDataSourceParametersSparkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.sqlServer">sql_server</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference">QuicksightDataSourceParametersSqlServerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.teradata">teradata</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference">QuicksightDataSourceParametersTeradataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.twitter">twitter</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference">QuicksightDataSourceParametersTwitterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.amazonElasticsearchInput">amazon_elasticsearch_input</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearch">QuicksightDataSourceParametersAmazonElasticsearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.athenaInput">athena_input</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthena">QuicksightDataSourceParametersAthena</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.auroraInput">aurora_input</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAurora">QuicksightDataSourceParametersAurora</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.auroraPostgresqlInput">aurora_postgresql_input</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresql">QuicksightDataSourceParametersAuroraPostgresql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.awsIotAnalyticsInput">aws_iot_analytics_input</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalytics">QuicksightDataSourceParametersAwsIotAnalytics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.jiraInput">jira_input</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJira">QuicksightDataSourceParametersJira</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.mariaDbInput">maria_db_input</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDb">QuicksightDataSourceParametersMariaDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.mysqlInput">mysql_input</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysql">QuicksightDataSourceParametersMysql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.oracleInput">oracle_input</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracle">QuicksightDataSourceParametersOracle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.postgresqlInput">postgresql_input</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresql">QuicksightDataSourceParametersPostgresql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.prestoInput">presto_input</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPresto">QuicksightDataSourceParametersPresto</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.rdsInput">rds_input</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRds">QuicksightDataSourceParametersRds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.redshiftInput">redshift_input</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift">QuicksightDataSourceParametersRedshift</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.s3Input">s3_input</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3">QuicksightDataSourceParametersS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.serviceNowInput">service_now_input</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNow">QuicksightDataSourceParametersServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.snowflakeInput">snowflake_input</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflake">QuicksightDataSourceParametersSnowflake</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.sparkInput">spark_input</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSpark">QuicksightDataSourceParametersSpark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.sqlServerInput">sql_server_input</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServer">QuicksightDataSourceParametersSqlServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.teradataInput">teradata_input</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradata">QuicksightDataSourceParametersTeradata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.twitterInput">twitter_input</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitter">QuicksightDataSourceParametersTwitter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters">QuicksightDataSourceParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `amazon_elasticsearch`<sup>Required</sup> <a name="amazon_elasticsearch" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.amazonElasticsearch"></a>

```python
amazon_elasticsearch: QuicksightDataSourceParametersAmazonElasticsearchOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference">QuicksightDataSourceParametersAmazonElasticsearchOutputReference</a>

---

##### `athena`<sup>Required</sup> <a name="athena" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.athena"></a>

```python
athena: QuicksightDataSourceParametersAthenaOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference">QuicksightDataSourceParametersAthenaOutputReference</a>

---

##### `aurora`<sup>Required</sup> <a name="aurora" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.aurora"></a>

```python
aurora: QuicksightDataSourceParametersAuroraOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference">QuicksightDataSourceParametersAuroraOutputReference</a>

---

##### `aurora_postgresql`<sup>Required</sup> <a name="aurora_postgresql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.auroraPostgresql"></a>

```python
aurora_postgresql: QuicksightDataSourceParametersAuroraPostgresqlOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference">QuicksightDataSourceParametersAuroraPostgresqlOutputReference</a>

---

##### `aws_iot_analytics`<sup>Required</sup> <a name="aws_iot_analytics" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.awsIotAnalytics"></a>

```python
aws_iot_analytics: QuicksightDataSourceParametersAwsIotAnalyticsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference">QuicksightDataSourceParametersAwsIotAnalyticsOutputReference</a>

---

##### `jira`<sup>Required</sup> <a name="jira" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.jira"></a>

```python
jira: QuicksightDataSourceParametersJiraOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference">QuicksightDataSourceParametersJiraOutputReference</a>

---

##### `maria_db`<sup>Required</sup> <a name="maria_db" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.mariaDb"></a>

```python
maria_db: QuicksightDataSourceParametersMariaDbOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference">QuicksightDataSourceParametersMariaDbOutputReference</a>

---

##### `mysql`<sup>Required</sup> <a name="mysql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.mysql"></a>

```python
mysql: QuicksightDataSourceParametersMysqlOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference">QuicksightDataSourceParametersMysqlOutputReference</a>

---

##### `oracle`<sup>Required</sup> <a name="oracle" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.oracle"></a>

```python
oracle: QuicksightDataSourceParametersOracleOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference">QuicksightDataSourceParametersOracleOutputReference</a>

---

##### `postgresql`<sup>Required</sup> <a name="postgresql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.postgresql"></a>

```python
postgresql: QuicksightDataSourceParametersPostgresqlOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference">QuicksightDataSourceParametersPostgresqlOutputReference</a>

---

##### `presto`<sup>Required</sup> <a name="presto" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.presto"></a>

```python
presto: QuicksightDataSourceParametersPrestoOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference">QuicksightDataSourceParametersPrestoOutputReference</a>

---

##### `rds`<sup>Required</sup> <a name="rds" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.rds"></a>

```python
rds: QuicksightDataSourceParametersRdsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference">QuicksightDataSourceParametersRdsOutputReference</a>

---

##### `redshift`<sup>Required</sup> <a name="redshift" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.redshift"></a>

```python
redshift: QuicksightDataSourceParametersRedshiftOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference">QuicksightDataSourceParametersRedshiftOutputReference</a>

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.s3"></a>

```python
s3: QuicksightDataSourceParametersS3OutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference">QuicksightDataSourceParametersS3OutputReference</a>

---

##### `service_now`<sup>Required</sup> <a name="service_now" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.serviceNow"></a>

```python
service_now: QuicksightDataSourceParametersServiceNowOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference">QuicksightDataSourceParametersServiceNowOutputReference</a>

---

##### `snowflake`<sup>Required</sup> <a name="snowflake" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.snowflake"></a>

```python
snowflake: QuicksightDataSourceParametersSnowflakeOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference">QuicksightDataSourceParametersSnowflakeOutputReference</a>

---

##### `spark`<sup>Required</sup> <a name="spark" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.spark"></a>

```python
spark: QuicksightDataSourceParametersSparkOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference">QuicksightDataSourceParametersSparkOutputReference</a>

---

##### `sql_server`<sup>Required</sup> <a name="sql_server" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.sqlServer"></a>

```python
sql_server: QuicksightDataSourceParametersSqlServerOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference">QuicksightDataSourceParametersSqlServerOutputReference</a>

---

##### `teradata`<sup>Required</sup> <a name="teradata" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.teradata"></a>

```python
teradata: QuicksightDataSourceParametersTeradataOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference">QuicksightDataSourceParametersTeradataOutputReference</a>

---

##### `twitter`<sup>Required</sup> <a name="twitter" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.twitter"></a>

```python
twitter: QuicksightDataSourceParametersTwitterOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference">QuicksightDataSourceParametersTwitterOutputReference</a>

---

##### `amazon_elasticsearch_input`<sup>Optional</sup> <a name="amazon_elasticsearch_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.amazonElasticsearchInput"></a>

```python
amazon_elasticsearch_input: QuicksightDataSourceParametersAmazonElasticsearch
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearch">QuicksightDataSourceParametersAmazonElasticsearch</a>

---

##### `athena_input`<sup>Optional</sup> <a name="athena_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.athenaInput"></a>

```python
athena_input: QuicksightDataSourceParametersAthena
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthena">QuicksightDataSourceParametersAthena</a>

---

##### `aurora_input`<sup>Optional</sup> <a name="aurora_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.auroraInput"></a>

```python
aurora_input: QuicksightDataSourceParametersAurora
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAurora">QuicksightDataSourceParametersAurora</a>

---

##### `aurora_postgresql_input`<sup>Optional</sup> <a name="aurora_postgresql_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.auroraPostgresqlInput"></a>

```python
aurora_postgresql_input: QuicksightDataSourceParametersAuroraPostgresql
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresql">QuicksightDataSourceParametersAuroraPostgresql</a>

---

##### `aws_iot_analytics_input`<sup>Optional</sup> <a name="aws_iot_analytics_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.awsIotAnalyticsInput"></a>

```python
aws_iot_analytics_input: QuicksightDataSourceParametersAwsIotAnalytics
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalytics">QuicksightDataSourceParametersAwsIotAnalytics</a>

---

##### `jira_input`<sup>Optional</sup> <a name="jira_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.jiraInput"></a>

```python
jira_input: QuicksightDataSourceParametersJira
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJira">QuicksightDataSourceParametersJira</a>

---

##### `maria_db_input`<sup>Optional</sup> <a name="maria_db_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.mariaDbInput"></a>

```python
maria_db_input: QuicksightDataSourceParametersMariaDb
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDb">QuicksightDataSourceParametersMariaDb</a>

---

##### `mysql_input`<sup>Optional</sup> <a name="mysql_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.mysqlInput"></a>

```python
mysql_input: QuicksightDataSourceParametersMysql
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysql">QuicksightDataSourceParametersMysql</a>

---

##### `oracle_input`<sup>Optional</sup> <a name="oracle_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.oracleInput"></a>

```python
oracle_input: QuicksightDataSourceParametersOracle
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracle">QuicksightDataSourceParametersOracle</a>

---

##### `postgresql_input`<sup>Optional</sup> <a name="postgresql_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.postgresqlInput"></a>

```python
postgresql_input: QuicksightDataSourceParametersPostgresql
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresql">QuicksightDataSourceParametersPostgresql</a>

---

##### `presto_input`<sup>Optional</sup> <a name="presto_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.prestoInput"></a>

```python
presto_input: QuicksightDataSourceParametersPresto
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPresto">QuicksightDataSourceParametersPresto</a>

---

##### `rds_input`<sup>Optional</sup> <a name="rds_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.rdsInput"></a>

```python
rds_input: QuicksightDataSourceParametersRds
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRds">QuicksightDataSourceParametersRds</a>

---

##### `redshift_input`<sup>Optional</sup> <a name="redshift_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.redshiftInput"></a>

```python
redshift_input: QuicksightDataSourceParametersRedshift
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift">QuicksightDataSourceParametersRedshift</a>

---

##### `s3_input`<sup>Optional</sup> <a name="s3_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.s3Input"></a>

```python
s3_input: QuicksightDataSourceParametersS3
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3">QuicksightDataSourceParametersS3</a>

---

##### `service_now_input`<sup>Optional</sup> <a name="service_now_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.serviceNowInput"></a>

```python
service_now_input: QuicksightDataSourceParametersServiceNow
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNow">QuicksightDataSourceParametersServiceNow</a>

---

##### `snowflake_input`<sup>Optional</sup> <a name="snowflake_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.snowflakeInput"></a>

```python
snowflake_input: QuicksightDataSourceParametersSnowflake
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflake">QuicksightDataSourceParametersSnowflake</a>

---

##### `spark_input`<sup>Optional</sup> <a name="spark_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.sparkInput"></a>

```python
spark_input: QuicksightDataSourceParametersSpark
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSpark">QuicksightDataSourceParametersSpark</a>

---

##### `sql_server_input`<sup>Optional</sup> <a name="sql_server_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.sqlServerInput"></a>

```python
sql_server_input: QuicksightDataSourceParametersSqlServer
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServer">QuicksightDataSourceParametersSqlServer</a>

---

##### `teradata_input`<sup>Optional</sup> <a name="teradata_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.teradataInput"></a>

```python
teradata_input: QuicksightDataSourceParametersTeradata
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradata">QuicksightDataSourceParametersTeradata</a>

---

##### `twitter_input`<sup>Optional</sup> <a name="twitter_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.twitterInput"></a>

```python
twitter_input: QuicksightDataSourceParametersTwitter
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitter">QuicksightDataSourceParametersTwitter</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightDataSourceParameters
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters">QuicksightDataSourceParameters</a>

---


### QuicksightDataSourceParametersPostgresqlOutputReference <a name="QuicksightDataSourceParametersPostgresqlOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_data_source

quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresql">QuicksightDataSourceParametersPostgresql</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightDataSourceParametersPostgresql
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresql">QuicksightDataSourceParametersPostgresql</a>

---


### QuicksightDataSourceParametersPrestoOutputReference <a name="QuicksightDataSourceParametersPrestoOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_data_source

quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.catalogInput">catalog_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.catalog">catalog</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPresto">QuicksightDataSourceParametersPresto</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_input`<sup>Optional</sup> <a name="catalog_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.catalogInput"></a>

```python
catalog_input: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.catalog"></a>

```python
catalog: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightDataSourceParametersPresto
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPresto">QuicksightDataSourceParametersPresto</a>

---


### QuicksightDataSourceParametersRdsOutputReference <a name="QuicksightDataSourceParametersRdsOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_data_source

quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRds">QuicksightDataSourceParametersRds</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightDataSourceParametersRds
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRds">QuicksightDataSourceParametersRds</a>

---


### QuicksightDataSourceParametersRedshiftOutputReference <a name="QuicksightDataSourceParametersRedshiftOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_data_source

quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.resetClusterId">reset_cluster_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.resetPort">reset_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cluster_id` <a name="reset_cluster_id" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.resetClusterId"></a>

```python
def reset_cluster_id() -> None
```

##### `reset_host` <a name="reset_host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.resetPort"></a>

```python
def reset_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift">QuicksightDataSourceParametersRedshift</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightDataSourceParametersRedshift
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift">QuicksightDataSourceParametersRedshift</a>

---


### QuicksightDataSourceParametersS3ManifestFileLocationOutputReference <a name="QuicksightDataSourceParametersS3ManifestFileLocationOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_data_source

quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocation">QuicksightDataSourceParametersS3ManifestFileLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightDataSourceParametersS3ManifestFileLocation
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocation">QuicksightDataSourceParametersS3ManifestFileLocation</a>

---


### QuicksightDataSourceParametersS3OutputReference <a name="QuicksightDataSourceParametersS3OutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_data_source

quicksightDataSource.QuicksightDataSourceParametersS3OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.putManifestFileLocation">put_manifest_file_location</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_manifest_file_location` <a name="put_manifest_file_location" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.putManifestFileLocation"></a>

```python
def put_manifest_file_location(
  bucket: str,
  key: str
) -> None
```

###### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.putManifestFileLocation.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#bucket QuicksightDataSource#bucket}.

---

###### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.putManifestFileLocation.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#key QuicksightDataSource#key}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.property.manifestFileLocation">manifest_file_location</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference">QuicksightDataSourceParametersS3ManifestFileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.property.manifestFileLocationInput">manifest_file_location_input</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocation">QuicksightDataSourceParametersS3ManifestFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3">QuicksightDataSourceParametersS3</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `manifest_file_location`<sup>Required</sup> <a name="manifest_file_location" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.property.manifestFileLocation"></a>

```python
manifest_file_location: QuicksightDataSourceParametersS3ManifestFileLocationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference">QuicksightDataSourceParametersS3ManifestFileLocationOutputReference</a>

---

##### `manifest_file_location_input`<sup>Optional</sup> <a name="manifest_file_location_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.property.manifestFileLocationInput"></a>

```python
manifest_file_location_input: QuicksightDataSourceParametersS3ManifestFileLocation
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocation">QuicksightDataSourceParametersS3ManifestFileLocation</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.property.internalValue"></a>

```python
internal_value: QuicksightDataSourceParametersS3
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3">QuicksightDataSourceParametersS3</a>

---


### QuicksightDataSourceParametersServiceNowOutputReference <a name="QuicksightDataSourceParametersServiceNowOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_data_source

quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.property.siteBaseUrlInput">site_base_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.property.siteBaseUrl">site_base_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNow">QuicksightDataSourceParametersServiceNow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `site_base_url_input`<sup>Optional</sup> <a name="site_base_url_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.property.siteBaseUrlInput"></a>

```python
site_base_url_input: str
```

- *Type:* str

---

##### `site_base_url`<sup>Required</sup> <a name="site_base_url" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.property.siteBaseUrl"></a>

```python
site_base_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightDataSourceParametersServiceNow
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNow">QuicksightDataSourceParametersServiceNow</a>

---


### QuicksightDataSourceParametersSnowflakeOutputReference <a name="QuicksightDataSourceParametersSnowflakeOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_data_source

quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.warehouseInput">warehouse_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.warehouse">warehouse</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflake">QuicksightDataSourceParametersSnowflake</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `warehouse_input`<sup>Optional</sup> <a name="warehouse_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.warehouseInput"></a>

```python
warehouse_input: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `warehouse`<sup>Required</sup> <a name="warehouse" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.warehouse"></a>

```python
warehouse: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightDataSourceParametersSnowflake
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflake">QuicksightDataSourceParametersSnowflake</a>

---


### QuicksightDataSourceParametersSparkOutputReference <a name="QuicksightDataSourceParametersSparkOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_data_source

quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSpark">QuicksightDataSourceParametersSpark</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightDataSourceParametersSpark
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSpark">QuicksightDataSourceParametersSpark</a>

---


### QuicksightDataSourceParametersSqlServerOutputReference <a name="QuicksightDataSourceParametersSqlServerOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_data_source

quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServer">QuicksightDataSourceParametersSqlServer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightDataSourceParametersSqlServer
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServer">QuicksightDataSourceParametersSqlServer</a>

---


### QuicksightDataSourceParametersTeradataOutputReference <a name="QuicksightDataSourceParametersTeradataOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_data_source

quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradata">QuicksightDataSourceParametersTeradata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightDataSourceParametersTeradata
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradata">QuicksightDataSourceParametersTeradata</a>

---


### QuicksightDataSourceParametersTwitterOutputReference <a name="QuicksightDataSourceParametersTwitterOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_data_source

quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.property.maxRowsInput">max_rows_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.property.maxRows">max_rows</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitter">QuicksightDataSourceParametersTwitter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_rows_input`<sup>Optional</sup> <a name="max_rows_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.property.maxRowsInput"></a>

```python
max_rows_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `max_rows`<sup>Required</sup> <a name="max_rows" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.property.maxRows"></a>

```python
max_rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightDataSourceParametersTwitter
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitter">QuicksightDataSourceParametersTwitter</a>

---


### QuicksightDataSourcePermissionList <a name="QuicksightDataSourcePermissionList" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_data_source

quicksightDataSource.QuicksightDataSourcePermissionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> QuicksightDataSourcePermissionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermission">QuicksightDataSourcePermission</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[QuicksightDataSourcePermission]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermission">QuicksightDataSourcePermission</a>]]

---


### QuicksightDataSourcePermissionOutputReference <a name="QuicksightDataSourcePermissionOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_data_source

quicksightDataSource.QuicksightDataSourcePermissionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.property.actionsInput">actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.property.principalInput">principal_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.property.actions">actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.property.principal">principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermission">QuicksightDataSourcePermission</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `actions_input`<sup>Optional</sup> <a name="actions_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.property.actionsInput"></a>

```python
actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principal_input`<sup>Optional</sup> <a name="principal_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.property.principalInput"></a>

```python
principal_input: str
```

- *Type:* str

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.property.principal"></a>

```python
principal: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[QuicksightDataSourcePermission, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermission">QuicksightDataSourcePermission</a>, cdktf.IResolvable]

---


### QuicksightDataSourceSslPropertiesOutputReference <a name="QuicksightDataSourceSslPropertiesOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_data_source

quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.property.disableSslInput">disable_ssl_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.property.disableSsl">disable_ssl</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslProperties">QuicksightDataSourceSslProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disable_ssl_input`<sup>Optional</sup> <a name="disable_ssl_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.property.disableSslInput"></a>

```python
disable_ssl_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_ssl`<sup>Required</sup> <a name="disable_ssl" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.property.disableSsl"></a>

```python
disable_ssl: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightDataSourceSslProperties
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslProperties">QuicksightDataSourceSslProperties</a>

---


### QuicksightDataSourceVpcConnectionPropertiesOutputReference <a name="QuicksightDataSourceVpcConnectionPropertiesOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_data_source

quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.property.vpcConnectionArnInput">vpc_connection_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.property.vpcConnectionArn">vpc_connection_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionProperties">QuicksightDataSourceVpcConnectionProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vpc_connection_arn_input`<sup>Optional</sup> <a name="vpc_connection_arn_input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.property.vpcConnectionArnInput"></a>

```python
vpc_connection_arn_input: str
```

- *Type:* str

---

##### `vpc_connection_arn`<sup>Required</sup> <a name="vpc_connection_arn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.property.vpcConnectionArn"></a>

```python
vpc_connection_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightDataSourceVpcConnectionProperties
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionProperties">QuicksightDataSourceVpcConnectionProperties</a>

---



