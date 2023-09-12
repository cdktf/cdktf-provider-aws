# `data_aws_codecatalyst_dev_environment`

Refer to the Terraform Registory for docs: [`data_aws_codecatalyst_dev_environment`](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/data-sources/codecatalyst_dev_environment).

# `dataAwsCodecatalystDevEnvironment` Submodule <a name="`dataAwsCodecatalystDevEnvironment` Submodule" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsCodecatalystDevEnvironment <a name="DataAwsCodecatalystDevEnvironment" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/data-sources/codecatalyst_dev_environment aws_codecatalyst_dev_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_codecatalyst_dev_environment

dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  env_id: str,
  project_name: str,
  space_name: str,
  alias: str = None,
  creator_id: str = None,
  id: str = None,
  repositories: typing.Union[IResolvable, typing.List[DataAwsCodecatalystDevEnvironmentRepositories]] = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.Initializer.parameter.envId">env_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/data-sources/codecatalyst_dev_environment#env_id DataAwsCodecatalystDevEnvironment#env_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.Initializer.parameter.projectName">project_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/data-sources/codecatalyst_dev_environment#project_name DataAwsCodecatalystDevEnvironment#project_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.Initializer.parameter.spaceName">space_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/data-sources/codecatalyst_dev_environment#space_name DataAwsCodecatalystDevEnvironment#space_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/data-sources/codecatalyst_dev_environment#alias DataAwsCodecatalystDevEnvironment#alias}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.Initializer.parameter.creatorId">creator_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/data-sources/codecatalyst_dev_environment#creator_id DataAwsCodecatalystDevEnvironment#creator_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/data-sources/codecatalyst_dev_environment#id DataAwsCodecatalystDevEnvironment#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.Initializer.parameter.repositories">repositories</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositories">DataAwsCodecatalystDevEnvironmentRepositories</a>]]</code> | repositories block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/data-sources/codecatalyst_dev_environment#tags DataAwsCodecatalystDevEnvironment#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `env_id`<sup>Required</sup> <a name="env_id" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.Initializer.parameter.envId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/data-sources/codecatalyst_dev_environment#env_id DataAwsCodecatalystDevEnvironment#env_id}.

---

##### `project_name`<sup>Required</sup> <a name="project_name" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.Initializer.parameter.projectName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/data-sources/codecatalyst_dev_environment#project_name DataAwsCodecatalystDevEnvironment#project_name}.

---

##### `space_name`<sup>Required</sup> <a name="space_name" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.Initializer.parameter.spaceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/data-sources/codecatalyst_dev_environment#space_name DataAwsCodecatalystDevEnvironment#space_name}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.Initializer.parameter.alias"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/data-sources/codecatalyst_dev_environment#alias DataAwsCodecatalystDevEnvironment#alias}.

---

##### `creator_id`<sup>Optional</sup> <a name="creator_id" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.Initializer.parameter.creatorId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/data-sources/codecatalyst_dev_environment#creator_id DataAwsCodecatalystDevEnvironment#creator_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/data-sources/codecatalyst_dev_environment#id DataAwsCodecatalystDevEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `repositories`<sup>Optional</sup> <a name="repositories" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.Initializer.parameter.repositories"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositories">DataAwsCodecatalystDevEnvironmentRepositories</a>]]

repositories block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/data-sources/codecatalyst_dev_environment#repositories DataAwsCodecatalystDevEnvironment#repositories}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/data-sources/codecatalyst_dev_environment#tags DataAwsCodecatalystDevEnvironment#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.putRepositories">put_repositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.resetCreatorId">reset_creator_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.resetRepositories">reset_repositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_repositories` <a name="put_repositories" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.putRepositories"></a>

```python
def put_repositories(
  value: typing.Union[IResolvable, typing.List[DataAwsCodecatalystDevEnvironmentRepositories]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.putRepositories.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositories">DataAwsCodecatalystDevEnvironmentRepositories</a>]]

---

##### `reset_alias` <a name="reset_alias" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_creator_id` <a name="reset_creator_id" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.resetCreatorId"></a>

```python
def reset_creator_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_repositories` <a name="reset_repositories" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.resetRepositories"></a>

```python
def reset_repositories() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_codecatalyst_dev_environment

dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_codecatalyst_dev_environment

dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_codecatalyst_dev_environment

dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.ides">ides</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList">DataAwsCodecatalystDevEnvironmentIdesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.inactivityTimeoutMinutes">inactivity_timeout_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.lastUpdatedTime">last_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.persistentStorage">persistent_storage</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList">DataAwsCodecatalystDevEnvironmentPersistentStorageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.repositories">repositories</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList">DataAwsCodecatalystDevEnvironmentRepositoriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.statusReason">status_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.creatorIdInput">creator_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.envIdInput">env_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.projectNameInput">project_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.repositoriesInput">repositories_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositories">DataAwsCodecatalystDevEnvironmentRepositories</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.spaceNameInput">space_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.creatorId">creator_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.envId">env_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.projectName">project_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.spaceName">space_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `ides`<sup>Required</sup> <a name="ides" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.ides"></a>

```python
ides: DataAwsCodecatalystDevEnvironmentIdesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList">DataAwsCodecatalystDevEnvironmentIdesList</a>

---

##### `inactivity_timeout_minutes`<sup>Required</sup> <a name="inactivity_timeout_minutes" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.inactivityTimeoutMinutes"></a>

```python
inactivity_timeout_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `last_updated_time`<sup>Required</sup> <a name="last_updated_time" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.lastUpdatedTime"></a>

```python
last_updated_time: str
```

- *Type:* str

---

##### `persistent_storage`<sup>Required</sup> <a name="persistent_storage" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.persistentStorage"></a>

```python
persistent_storage: DataAwsCodecatalystDevEnvironmentPersistentStorageList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList">DataAwsCodecatalystDevEnvironmentPersistentStorageList</a>

---

##### `repositories`<sup>Required</sup> <a name="repositories" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.repositories"></a>

```python
repositories: DataAwsCodecatalystDevEnvironmentRepositoriesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList">DataAwsCodecatalystDevEnvironmentRepositoriesList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_reason`<sup>Required</sup> <a name="status_reason" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.statusReason"></a>

```python
status_reason: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `creator_id_input`<sup>Optional</sup> <a name="creator_id_input" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.creatorIdInput"></a>

```python
creator_id_input: str
```

- *Type:* str

---

##### `env_id_input`<sup>Optional</sup> <a name="env_id_input" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.envIdInput"></a>

```python
env_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_name_input`<sup>Optional</sup> <a name="project_name_input" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.projectNameInput"></a>

```python
project_name_input: str
```

- *Type:* str

---

##### `repositories_input`<sup>Optional</sup> <a name="repositories_input" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.repositoriesInput"></a>

```python
repositories_input: typing.Union[IResolvable, typing.List[DataAwsCodecatalystDevEnvironmentRepositories]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositories">DataAwsCodecatalystDevEnvironmentRepositories</a>]]

---

##### `space_name_input`<sup>Optional</sup> <a name="space_name_input" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.spaceNameInput"></a>

```python
space_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `creator_id`<sup>Required</sup> <a name="creator_id" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.creatorId"></a>

```python
creator_id: str
```

- *Type:* str

---

##### `env_id`<sup>Required</sup> <a name="env_id" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.envId"></a>

```python
env_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project_name`<sup>Required</sup> <a name="project_name" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.projectName"></a>

```python
project_name: str
```

- *Type:* str

---

##### `space_name`<sup>Required</sup> <a name="space_name" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.spaceName"></a>

```python
space_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsCodecatalystDevEnvironmentConfig <a name="DataAwsCodecatalystDevEnvironmentConfig" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_codecatalyst_dev_environment

dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  env_id: str,
  project_name: str,
  space_name: str,
  alias: str = None,
  creator_id: str = None,
  id: str = None,
  repositories: typing.Union[IResolvable, typing.List[DataAwsCodecatalystDevEnvironmentRepositories]] = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.envId">env_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/data-sources/codecatalyst_dev_environment#env_id DataAwsCodecatalystDevEnvironment#env_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.projectName">project_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/data-sources/codecatalyst_dev_environment#project_name DataAwsCodecatalystDevEnvironment#project_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.spaceName">space_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/data-sources/codecatalyst_dev_environment#space_name DataAwsCodecatalystDevEnvironment#space_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.alias">alias</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/data-sources/codecatalyst_dev_environment#alias DataAwsCodecatalystDevEnvironment#alias}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.creatorId">creator_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/data-sources/codecatalyst_dev_environment#creator_id DataAwsCodecatalystDevEnvironment#creator_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/data-sources/codecatalyst_dev_environment#id DataAwsCodecatalystDevEnvironment#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.repositories">repositories</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositories">DataAwsCodecatalystDevEnvironmentRepositories</a>]]</code> | repositories block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/data-sources/codecatalyst_dev_environment#tags DataAwsCodecatalystDevEnvironment#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `env_id`<sup>Required</sup> <a name="env_id" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.envId"></a>

```python
env_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/data-sources/codecatalyst_dev_environment#env_id DataAwsCodecatalystDevEnvironment#env_id}.

---

##### `project_name`<sup>Required</sup> <a name="project_name" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.projectName"></a>

```python
project_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/data-sources/codecatalyst_dev_environment#project_name DataAwsCodecatalystDevEnvironment#project_name}.

---

##### `space_name`<sup>Required</sup> <a name="space_name" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.spaceName"></a>

```python
space_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/data-sources/codecatalyst_dev_environment#space_name DataAwsCodecatalystDevEnvironment#space_name}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/data-sources/codecatalyst_dev_environment#alias DataAwsCodecatalystDevEnvironment#alias}.

---

##### `creator_id`<sup>Optional</sup> <a name="creator_id" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.creatorId"></a>

```python
creator_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/data-sources/codecatalyst_dev_environment#creator_id DataAwsCodecatalystDevEnvironment#creator_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/data-sources/codecatalyst_dev_environment#id DataAwsCodecatalystDevEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `repositories`<sup>Optional</sup> <a name="repositories" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.repositories"></a>

```python
repositories: typing.Union[IResolvable, typing.List[DataAwsCodecatalystDevEnvironmentRepositories]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositories">DataAwsCodecatalystDevEnvironmentRepositories</a>]]

repositories block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/data-sources/codecatalyst_dev_environment#repositories DataAwsCodecatalystDevEnvironment#repositories}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/data-sources/codecatalyst_dev_environment#tags DataAwsCodecatalystDevEnvironment#tags}.

---

### DataAwsCodecatalystDevEnvironmentIdes <a name="DataAwsCodecatalystDevEnvironmentIdes" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdes.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_codecatalyst_dev_environment

dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdes()
```


### DataAwsCodecatalystDevEnvironmentPersistentStorage <a name="DataAwsCodecatalystDevEnvironmentPersistentStorage" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorage.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_codecatalyst_dev_environment

dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorage()
```


### DataAwsCodecatalystDevEnvironmentRepositories <a name="DataAwsCodecatalystDevEnvironmentRepositories" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositories"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositories.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_codecatalyst_dev_environment

dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositories()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsCodecatalystDevEnvironmentIdesList <a name="DataAwsCodecatalystDevEnvironmentIdesList" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_codecatalyst_dev_environment

dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsCodecatalystDevEnvironmentIdesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsCodecatalystDevEnvironmentIdesOutputReference <a name="DataAwsCodecatalystDevEnvironmentIdesOutputReference" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_codecatalyst_dev_environment

dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.property.runtime">runtime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdes">DataAwsCodecatalystDevEnvironmentIdes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.property.runtime"></a>

```python
runtime: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCodecatalystDevEnvironmentIdes
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdes">DataAwsCodecatalystDevEnvironmentIdes</a>

---


### DataAwsCodecatalystDevEnvironmentPersistentStorageList <a name="DataAwsCodecatalystDevEnvironmentPersistentStorageList" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_codecatalyst_dev_environment

dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference <a name="DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_codecatalyst_dev_environment

dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorage">DataAwsCodecatalystDevEnvironmentPersistentStorage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCodecatalystDevEnvironmentPersistentStorage
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorage">DataAwsCodecatalystDevEnvironmentPersistentStorage</a>

---


### DataAwsCodecatalystDevEnvironmentRepositoriesList <a name="DataAwsCodecatalystDevEnvironmentRepositoriesList" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_codecatalyst_dev_environment

dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositories">DataAwsCodecatalystDevEnvironmentRepositories</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsCodecatalystDevEnvironmentRepositories]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositories">DataAwsCodecatalystDevEnvironmentRepositories</a>]]

---


### DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference <a name="DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_codecatalyst_dev_environment

dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.property.branchName">branch_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.property.repositoryName">repository_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositories">DataAwsCodecatalystDevEnvironmentRepositories</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `branch_name`<sup>Required</sup> <a name="branch_name" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.property.branchName"></a>

```python
branch_name: str
```

- *Type:* str

---

##### `repository_name`<sup>Required</sup> <a name="repository_name" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.property.repositoryName"></a>

```python
repository_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAwsCodecatalystDevEnvironmentRepositories]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositories">DataAwsCodecatalystDevEnvironmentRepositories</a>]

---



