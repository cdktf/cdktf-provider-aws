# `dataAwsElasticacheUser` Submodule <a name="`dataAwsElasticacheUser` Submodule" id="@cdktf/provider-aws.dataAwsElasticacheUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsElasticacheUser <a name="DataAwsElasticacheUser" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/data-sources/elasticache_user aws_elasticache_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticache_user

dataAwsElasticacheUser.DataAwsElasticacheUser(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  user_id: str,
  access_string: str = None,
  authentication_mode: typing.Union[IResolvable, typing.List[DataAwsElasticacheUserAuthenticationMode]] = None,
  engine: str = None,
  id: str = None,
  no_password_required: typing.Union[bool, IResolvable] = None,
  passwords: typing.List[str] = None,
  region: str = None,
  user_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.Initializer.parameter.userId">user_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/data-sources/elasticache_user#user_id DataAwsElasticacheUser#user_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.Initializer.parameter.accessString">access_string</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/data-sources/elasticache_user#access_string DataAwsElasticacheUser#access_string}. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.Initializer.parameter.authenticationMode">authentication_mode</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationMode">DataAwsElasticacheUserAuthenticationMode</a>]]</code> | authentication_mode block. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.Initializer.parameter.engine">engine</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/data-sources/elasticache_user#engine DataAwsElasticacheUser#engine}. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/data-sources/elasticache_user#id DataAwsElasticacheUser#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.Initializer.parameter.noPasswordRequired">no_password_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/data-sources/elasticache_user#no_password_required DataAwsElasticacheUser#no_password_required}. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.Initializer.parameter.passwords">passwords</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/data-sources/elasticache_user#passwords DataAwsElasticacheUser#passwords}. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.Initializer.parameter.userName">user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/data-sources/elasticache_user#user_name DataAwsElasticacheUser#user_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.Initializer.parameter.userId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/data-sources/elasticache_user#user_id DataAwsElasticacheUser#user_id}.

---

##### `access_string`<sup>Optional</sup> <a name="access_string" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.Initializer.parameter.accessString"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/data-sources/elasticache_user#access_string DataAwsElasticacheUser#access_string}.

---

##### `authentication_mode`<sup>Optional</sup> <a name="authentication_mode" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.Initializer.parameter.authenticationMode"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationMode">DataAwsElasticacheUserAuthenticationMode</a>]]

authentication_mode block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/data-sources/elasticache_user#authentication_mode DataAwsElasticacheUser#authentication_mode}

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.Initializer.parameter.engine"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/data-sources/elasticache_user#engine DataAwsElasticacheUser#engine}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/data-sources/elasticache_user#id DataAwsElasticacheUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `no_password_required`<sup>Optional</sup> <a name="no_password_required" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.Initializer.parameter.noPasswordRequired"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/data-sources/elasticache_user#no_password_required DataAwsElasticacheUser#no_password_required}.

---

##### `passwords`<sup>Optional</sup> <a name="passwords" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.Initializer.parameter.passwords"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/data-sources/elasticache_user#passwords DataAwsElasticacheUser#passwords}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/data-sources/elasticache_user#region DataAwsElasticacheUser#region}

---

##### `user_name`<sup>Optional</sup> <a name="user_name" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.Initializer.parameter.userName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/data-sources/elasticache_user#user_name DataAwsElasticacheUser#user_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.putAuthenticationMode">put_authentication_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.resetAccessString">reset_access_string</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.resetAuthenticationMode">reset_authentication_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.resetEngine">reset_engine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.resetNoPasswordRequired">reset_no_password_required</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.resetPasswords">reset_passwords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.resetUserName">reset_user_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_authentication_mode` <a name="put_authentication_mode" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.putAuthenticationMode"></a>

```python
def put_authentication_mode(
  value: typing.Union[IResolvable, typing.List[DataAwsElasticacheUserAuthenticationMode]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.putAuthenticationMode.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationMode">DataAwsElasticacheUserAuthenticationMode</a>]]

---

##### `reset_access_string` <a name="reset_access_string" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.resetAccessString"></a>

```python
def reset_access_string() -> None
```

##### `reset_authentication_mode` <a name="reset_authentication_mode" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.resetAuthenticationMode"></a>

```python
def reset_authentication_mode() -> None
```

##### `reset_engine` <a name="reset_engine" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.resetEngine"></a>

```python
def reset_engine() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_no_password_required` <a name="reset_no_password_required" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.resetNoPasswordRequired"></a>

```python
def reset_no_password_required() -> None
```

##### `reset_passwords` <a name="reset_passwords" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.resetPasswords"></a>

```python
def reset_passwords() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_user_name` <a name="reset_user_name" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.resetUserName"></a>

```python
def reset_user_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsElasticacheUser resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticache_user

dataAwsElasticacheUser.DataAwsElasticacheUser.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticache_user

dataAwsElasticacheUser.DataAwsElasticacheUser.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticache_user

dataAwsElasticacheUser.DataAwsElasticacheUser.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticache_user

dataAwsElasticacheUser.DataAwsElasticacheUser.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsElasticacheUser resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsElasticacheUser to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsElasticacheUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/data-sources/elasticache_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsElasticacheUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.authenticationMode">authentication_mode</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeList">DataAwsElasticacheUserAuthenticationModeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.accessStringInput">access_string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.authenticationModeInput">authentication_mode_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationMode">DataAwsElasticacheUserAuthenticationMode</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.engineInput">engine_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.noPasswordRequiredInput">no_password_required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.passwordsInput">passwords_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.userIdInput">user_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.userNameInput">user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.accessString">access_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.engine">engine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.noPasswordRequired">no_password_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.passwords">passwords</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.userId">user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.userName">user_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `authentication_mode`<sup>Required</sup> <a name="authentication_mode" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.authenticationMode"></a>

```python
authentication_mode: DataAwsElasticacheUserAuthenticationModeList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeList">DataAwsElasticacheUserAuthenticationModeList</a>

---

##### `access_string_input`<sup>Optional</sup> <a name="access_string_input" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.accessStringInput"></a>

```python
access_string_input: str
```

- *Type:* str

---

##### `authentication_mode_input`<sup>Optional</sup> <a name="authentication_mode_input" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.authenticationModeInput"></a>

```python
authentication_mode_input: typing.Union[IResolvable, typing.List[DataAwsElasticacheUserAuthenticationMode]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationMode">DataAwsElasticacheUserAuthenticationMode</a>]]

---

##### `engine_input`<sup>Optional</sup> <a name="engine_input" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.engineInput"></a>

```python
engine_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `no_password_required_input`<sup>Optional</sup> <a name="no_password_required_input" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.noPasswordRequiredInput"></a>

```python
no_password_required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `passwords_input`<sup>Optional</sup> <a name="passwords_input" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.passwordsInput"></a>

```python
passwords_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `user_id_input`<sup>Optional</sup> <a name="user_id_input" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.userIdInput"></a>

```python
user_id_input: str
```

- *Type:* str

---

##### `user_name_input`<sup>Optional</sup> <a name="user_name_input" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.userNameInput"></a>

```python
user_name_input: str
```

- *Type:* str

---

##### `access_string`<sup>Required</sup> <a name="access_string" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.accessString"></a>

```python
access_string: str
```

- *Type:* str

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.engine"></a>

```python
engine: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `no_password_required`<sup>Required</sup> <a name="no_password_required" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.noPasswordRequired"></a>

```python
no_password_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `passwords`<sup>Required</sup> <a name="passwords" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.passwords"></a>

```python
passwords: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.userId"></a>

```python
user_id: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUser.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsElasticacheUserAuthenticationMode <a name="DataAwsElasticacheUserAuthenticationMode" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationMode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationMode.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticache_user

dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationMode(
  password_count: typing.Union[int, float] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationMode.property.passwordCount">password_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/data-sources/elasticache_user#password_count DataAwsElasticacheUser#password_count}. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationMode.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/data-sources/elasticache_user#type DataAwsElasticacheUser#type}. |

---

##### `password_count`<sup>Optional</sup> <a name="password_count" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationMode.property.passwordCount"></a>

```python
password_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/data-sources/elasticache_user#password_count DataAwsElasticacheUser#password_count}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationMode.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/data-sources/elasticache_user#type DataAwsElasticacheUser#type}.

---

### DataAwsElasticacheUserConfig <a name="DataAwsElasticacheUserConfig" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticache_user

dataAwsElasticacheUser.DataAwsElasticacheUserConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  user_id: str,
  access_string: str = None,
  authentication_mode: typing.Union[IResolvable, typing.List[DataAwsElasticacheUserAuthenticationMode]] = None,
  engine: str = None,
  id: str = None,
  no_password_required: typing.Union[bool, IResolvable] = None,
  passwords: typing.List[str] = None,
  region: str = None,
  user_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.property.userId">user_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/data-sources/elasticache_user#user_id DataAwsElasticacheUser#user_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.property.accessString">access_string</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/data-sources/elasticache_user#access_string DataAwsElasticacheUser#access_string}. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.property.authenticationMode">authentication_mode</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationMode">DataAwsElasticacheUserAuthenticationMode</a>]]</code> | authentication_mode block. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.property.engine">engine</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/data-sources/elasticache_user#engine DataAwsElasticacheUser#engine}. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/data-sources/elasticache_user#id DataAwsElasticacheUser#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.property.noPasswordRequired">no_password_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/data-sources/elasticache_user#no_password_required DataAwsElasticacheUser#no_password_required}. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.property.passwords">passwords</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/data-sources/elasticache_user#passwords DataAwsElasticacheUser#passwords}. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.property.userName">user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/data-sources/elasticache_user#user_name DataAwsElasticacheUser#user_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.property.userId"></a>

```python
user_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/data-sources/elasticache_user#user_id DataAwsElasticacheUser#user_id}.

---

##### `access_string`<sup>Optional</sup> <a name="access_string" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.property.accessString"></a>

```python
access_string: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/data-sources/elasticache_user#access_string DataAwsElasticacheUser#access_string}.

---

##### `authentication_mode`<sup>Optional</sup> <a name="authentication_mode" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.property.authenticationMode"></a>

```python
authentication_mode: typing.Union[IResolvable, typing.List[DataAwsElasticacheUserAuthenticationMode]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationMode">DataAwsElasticacheUserAuthenticationMode</a>]]

authentication_mode block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/data-sources/elasticache_user#authentication_mode DataAwsElasticacheUser#authentication_mode}

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.property.engine"></a>

```python
engine: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/data-sources/elasticache_user#engine DataAwsElasticacheUser#engine}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/data-sources/elasticache_user#id DataAwsElasticacheUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `no_password_required`<sup>Optional</sup> <a name="no_password_required" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.property.noPasswordRequired"></a>

```python
no_password_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/data-sources/elasticache_user#no_password_required DataAwsElasticacheUser#no_password_required}.

---

##### `passwords`<sup>Optional</sup> <a name="passwords" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.property.passwords"></a>

```python
passwords: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/data-sources/elasticache_user#passwords DataAwsElasticacheUser#passwords}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/data-sources/elasticache_user#region DataAwsElasticacheUser#region}

---

##### `user_name`<sup>Optional</sup> <a name="user_name" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserConfig.property.userName"></a>

```python
user_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/data-sources/elasticache_user#user_name DataAwsElasticacheUser#user_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsElasticacheUserAuthenticationModeList <a name="DataAwsElasticacheUserAuthenticationModeList" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticache_user

dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsElasticacheUserAuthenticationModeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationMode">DataAwsElasticacheUserAuthenticationMode</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsElasticacheUserAuthenticationMode]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationMode">DataAwsElasticacheUserAuthenticationMode</a>]]

---


### DataAwsElasticacheUserAuthenticationModeOutputReference <a name="DataAwsElasticacheUserAuthenticationModeOutputReference" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticache_user

dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.resetPasswordCount">reset_password_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_password_count` <a name="reset_password_count" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.resetPasswordCount"></a>

```python
def reset_password_count() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.property.passwordCountInput">password_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.property.passwordCount">password_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationMode">DataAwsElasticacheUserAuthenticationMode</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password_count_input`<sup>Optional</sup> <a name="password_count_input" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.property.passwordCountInput"></a>

```python
password_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `password_count`<sup>Required</sup> <a name="password_count" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.property.passwordCount"></a>

```python
password_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationModeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAwsElasticacheUserAuthenticationMode]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsElasticacheUser.DataAwsElasticacheUserAuthenticationMode">DataAwsElasticacheUserAuthenticationMode</a>]

---



